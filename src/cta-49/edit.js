const { __ } = wp.i18n;
const { Component } = wp.element;
const { RichText, InspectorControls, PanelColorSettings, MediaUpload, InnerBlocks } = wp.editor;
const { RangeControl, PanelBody, Popover, TextControl, ToggleControl, Button, CheckboxControl, RadioControl, BaseControl, SelectControl } = wp.components;
import { defaultItem, getStyles, typographyArr } from './block';
import { InspectorContainer, ContainerEdit, uo } from '../commonComponents/container/container';
import { TypographyContainer, getTypography } from '../commonComponents/typography/typography';
import { Plus } from '../commonComponents/icons/plus';

/**
 * Keys for new blocks
 * @type {number}
 */
let key = 0;

/**
 * The edit function describes the structure of your block in the context of the editor.
 * This represents what the editor will render when the block is used.
 *
 * The "edit" property must be a valid function.
 * @param {Object} props - attributes
 * @returns {Node} rendered component
 */
export default class Edit extends Component {
    state = {
        popupVisibleIndex: -1,
        activeFilter: '',
    };

    /**
     * Add a new item to list with default fields
     */
    addItem = () => {
        key++;
        this.props.setAttributes( {
            items: [ ...this.props.attributes.items, {
                ...defaultItem,
                title: defaultItem.title + ' ' + ( key ),
                key: 'new ' + new Date().getTime(),
                icon: window.kenzap_cta_path + 'images/gallery-img-' + Math.round( 1 - 0.5 + ( Math.random() * ( 10 - 1 + 1 ) ) ) + '.jpg',
            } ],
        } );
    };

    /**
     * Change any property of item
     * @param {string} property - editable field
     * @param {string} value - for field
     * @param {number} index - of items array
     * @param {boolean} withMutation - in some cases we should avoid mutation for force rerender component
     */
    onChangePropertyItem = ( property, value, index, withMutation = false ) => {
        const items = withMutation ? [ ...this.props.attributes.items ] : this.props.attributes.items;
        if ( ! items[ index ] ) {
            return;
        }
        items[ index ][ property ] = value;
        this.props.setAttributes( { items: items } );
    };

    /**
     * Remove item
     * It also add default item if we remove all elements from array
     * @param {number} index - of item
     */
    removeItem = ( index ) => {
        const items = [ ...this.props.attributes.items ];
        if ( items.length === 1 ) {
            this.props.setAttributes( {
                items: [ {
                    ...defaultItem,
                    icon: window.kenzap_cta_path + 'images/gallery-img-' + Math.round( 1 - 0.5 + ( Math.random() * ( 10 - 1 + 1 ) ) ) + '.jpg',
                } ],
            } );
        } else {
            items.splice( index, 1 );
            this.props.setAttributes( { items: items } );
        }
    };

    /**
     * Remove filter
     * It also add default item if we remove all elements from array
     * @param {number} index - of item
     */
    removeFilter = index => {
        const filters = [ ...this.props.attributes.filters ];
        if ( filters.length === 1 ) {
            const items = [ ...this.props.attributes.items ];
            items.forEach( item => {
                item.categories = [];
            } );
            this.props.setAttributes( {
                filters: [ {
                    name: 'All',
                    class: '*',
                } ],
                items,
            } );
        } else {
            const removeFilterValue = filters[ index ].class;
            const items = [ ...this.props.attributes.items ];
            items.forEach( item => {
                item.categories.forEach( ( filter, fIndex ) => {
                    if ( filter === removeFilterValue ) {
                        item.categories.splice( fIndex, 1 );
                    }
                } );
            } );
            filters.splice( index, 1 );
            this.props.setAttributes( { filters, items } );
        }
    };

    /**
     * Add a new item to list with default fields
     */
    addFilter = () => {
        key++;
        this.props.setAttributes( {
            filters: [ ...this.props.attributes.filters, {
                name: __( 'Filter', 'kenzap-gallery' ) + key,
                class: 'filter' + new Date().getTime(),
            } ],
        } );
    };

    render() {
        const {
            className,
            attributes,
            setAttributes,
            isSelected,
        } = this.props;

        const { vars, kenzapContanerStyles } = getStyles( attributes );

        return (
            <div>
                <InspectorControls>
                    <PanelBody
                        title={ __( 'General', 'kenzap-gallery' ) }
                        initialOpen={ true }
                    >
                        <CheckboxControl
                            label={ __( 'Filters', 'kenzap-gallery' ) }
                            checked={ attributes.isFilterShow }
                            onChange={ ( isFilterShow ) => {
                                setAttributes( { isFilterShow } );
                            } }
                        />

                        { attributes.isFilterShow && <BaseControl
                            id="Manage-filters-1"
                        >

                            { attributes.filters.map( ( filter, index ) => (
                                <div key={ filter.class }>
                                    <div
                                        onClick={ () => this.setState( { activeFilter: index } ) }
                                        style={ {
                                            display: 'flex',
                                            justifyContent: 'flex-start',
                                            alignItems: 'center',
                                            marginBottom: '5px',
                                        } }
                                    >
                                        <span onClick={ () => this.removeFilter( index ) }
                                            style={ { lineHeight: 1, cursor: 'pointer', marginRight: '5px' } }
                                            className="dashicons dashicons-no" />
                                        <span>{ filter.name }</span>
                                    </div>
                                </div>
                            ) ) }
                            <div
                                style={ {
                                    display: 'flex',
                                    justifyContent: 'flex-start',
                                    alignItems: 'center',
                                    cursor: 'pointer',
                                } }
                                onClick={ this.addFilter }
                            >
                                <span style={ { lineHeight: 1, marginRight: '5px' } }><Plus /></span>
                                <span>{ __( 'Add new filter', 'kenzap-gallery' ) }</span>
                            </div>
                        </BaseControl>
                        }

                        <RadioControl
                            label={ __( 'Image style', 'kenzap-gallery' ) }
                            selected={ attributes.displayType }
                            options={ [
                                { label: __( 'Horizontal', 'kenzap-gallery' ), value: 'kp-horizontal' },
                                { label: __( 'Square', 'kenzap-gallery' ), value: 'kp-square' },
                                { label: __( 'Vertical', 'kenzap-gallery' ), value: 'kp-vertical' },
                            ] }
                            onChange={ ( displayType ) => {
                                setAttributes( { displayType } );
                            } }
                            label={ __( 'Preview changes on frontend', 'kenzap-gallery' ) }
                        />

                        <RadioControl
                            label={ __( 'Text location', 'kenzap-gallery' ) }
                            selected={ attributes.textLocation }
                            options={ [
                                { label: __( 'Left', 'kenzap-gallery' ), value: 'textLeft' },
                                { label: __( 'Bottom', 'kenzap-gallery' ), value: 'textBottom' },
                            ] }
                            onChange={ ( textLocation ) => {
                                setAttributes( { textLocation } );
                            } }
                        />

                        <SelectControl
                            label={ __( 'Columns', 'kenzap-gallery' ) }
                            value={ attributes.columns }
                            options={ [
                                { label: __( 'Default', 'kenzap-gallery' ), value: 'default' },
                                { label: __( 'One', 'kenzap-gallery' ), value: 'kenzap-xs' },
                                { label: __( 'One/Two', 'kenzap-gallery' ), value: 'kenzap-sm' },
                                { label: __( 'Two/More', 'kenzap-gallery' ), value: 'kenzap-md' },
                            ] }
                            onChange={ ( columns ) => {
                                setAttributes( { columns } );
                            } }
                        />

                        <SelectControl
                            label={ __( 'Hover effect', 'kenzap-gallery' ) }
                            value={ attributes.hoverEffect }
                            options={ [
                                { label: __( 'None', 'kenzap-gallery' ), value: ' ' },
                                { label: __( 'Zoom in', 'kenzap-gallery' ), value: 'kp-zoom-in' },
                                { label: __( 'Zoom out', 'kenzap-gallery' ), value: 'kp-zoom-out' },
                                { label: __( 'Frame in', 'kenzap-gallery' ), value: 'kp-frame-in' },
                                { label: __( 'Frame out', 'kenzap-gallery' ), value: 'kp-frame-out' },
                            ] }
                            onChange={ ( hoverEffect ) => {
                                setAttributes( { hoverEffect } );
                            } }
                        />

                        <RangeControl
                            label={ __( 'Border radius', 'kenzap-gallery' ) }
                            value={ attributes.borderRadius }
                            onChange={ ( borderRadius ) => setAttributes( { borderRadius } ) }
                            min={ 0 }
                            max={ 60 }
                        />

                        <RangeControl
                            label={ __( 'Filter divider size', 'kenzap-gallery' ) }
                            value={ attributes.filtersSize }
                            onChange={ ( filtersSize ) => setAttributes( { filtersSize } ) }
                            min={ 10 }
                            max={ 130 }
                        />
                        <PanelColorSettings
                            title={ __( 'Colors', 'kenzap-gallery' ) }
                            initialOpen={ false }
                            colorSettings={ [
                                {
                                    value: attributes.titleColor,
                                    onChange: ( titleColor ) => {
                                        return setAttributes( { titleColor } );
                                    },
                                    label: __( 'Filter divider', 'kenzap-gallery' ),
                                },
    

                            ] }
                        />

                    </PanelBody>

                    <TypographyContainer
                        setAttributes={ setAttributes }
                        typographyArr={ typographyArr }
                        { ...attributes }
                    />

                    <InspectorContainer
                        setAttributes={ setAttributes }
                        { ...attributes }
                        withNested
                        withPadding
                        withWidth100
                        withBackground
                        withAutoPadding
                        
                    />
                </InspectorControls>
                <div className={ `${ className ? className : '' } ` } style={ vars }>
                    <ContainerEdit
                        className={ `kenzap-gallery-1 ${ attributes.hoverEffect } ${ attributes.textLocation } ${ attributes.columns === 'default' ? '' : attributes.columns } ${ attributes.displayType } ${ isSelected ? 'selected' : '' } ` }
                        attributes={ attributes }
                        withBackground
                        withPadding
                    >
                        <div className="kenzap-container" style={ kenzapContanerStyles }>
                            { attributes.nestedBlocks == 'top' && <InnerBlocks /> }
                            { attributes.isFilterShow && <ul className="kp-filter" style={ {...getTypography( attributes, 2, 'margin-bottom' ),...getTypography( attributes, 2, 'text-align' ) } }>
                                { attributes.filters.map( ( filter, index ) => (
                                    <li key={ filter.class }>
                                        <a
                                            href="#"
                                            className={ `filter ${ index === this.state.activeFilter ? 'active' : '' }` }
                                            data-filter={ filter.class }
                                            onClick={ () => this.setState( { activeFilter: index } ) }
                                            style={ { cursor: 'auto' } }
                                        >
                                            <RichText
                                                tag="span"
                                                value={ filter.name }
                                                onChange={ ( value ) => {
                                                    const filters = [ ...attributes.filters ];
                                                    filters[ index ].name = value;
                                                    setAttributes( { filters } );
                                                } }
                                                style={ { display:'inline',...getTypography( attributes, 2 ) } }
                                            />
                                        </a>
                                    </li>
                                ) ) }
                            </ul>
                            }
                            <div className="kp-list">
                                { attributes.items && attributes.items.map( ( item, index ) => (
                                    <div
                                        key={ item.key }
                                        className={ `kp-item ${ item.categories.join( ' ' ) }` }
                                    >
                                        <button className="remove" onClick={ () => this.removeItem( index ) }>
                                            <span className="dashicons dashicons-no" />
                                        </button>

                                        <div className="gallery-box">
                                            <div className="kp-img">
                                                <a
                                                    href="#"
                                                    onClick={ () => { this.setState( { popupVisibleIndex: index } ); } }
                                                    style={ { backgroundImage: `url(${ (item.icon) })`,  cursor: 'pointer' } }
                                                    rel="noopener noreferrer"
                                                />

                                            </div>
                                            <div className="kp-info" style={ getTypography( attributes, 0, 'text-align' ) } >
                                                <h3
                                                    style={ {
                                                        fontSize: `${ attributes.titleSize }px`,
                                                    } }
                                                >
                                                    <RichText
                                                        tag="a"
                                                        value={ item.title }
                                                        placeholder={ __( 'Title', 'kenzap-gallery' ) }
                                                        onChange={ ( value ) => this.onChangePropertyItem( 'title', value, index, true ) }
                                                        className="gallery-link"
                                                        style={ getTypography( attributes, 0 ) }
                                                        formattingControls={ [] }
                                                    />
                                                </h3>
                                                <ul style={ getTypography( attributes, 1, "text-align" ) }>
                                                    <li>
                                                        <RichText
                                                            tag="a"
                                                            className="kp-a"
                                                            value={ item.description }
                                                            placeholder={ __( 'Description', 'kenzap-gallery' ) }
                                                            onChange={ ( value ) => this.onChangePropertyItem( 'description', value, index, true ) }
                                                            style={ getTypography( attributes, 1 ) }
                                                        />
                                                    </li>
                                                </ul>
                                            </div>

                                            { this.state.popupVisibleIndex === index &&
                                            <Popover
                                                focusOnMount={ false }
                                                className="kenzap-gallery-1-link-popover"
                                            >
                                                <span
                                                    onClick={ () => this.setState( { popupVisibleIndex: -1 } ) }
                                                    style={ {
                                                        lineHeight: 1,
                                                        cursor: 'pointer',
                                                        position: 'absolute',
                                                        top: 0,
                                                        right: 0,
                                                    } }
                                                    className="dashicons dashicons-no"
                                                />
                                                <div>
                                                    <RadioControl
                                                        label={ __( 'On click action', 'kenzap-gallery' ) }
                                                        selected={ item.action }
                                                        options={ [
                                                            { label: __( 'Enlarge Image', 'kenzap-gallery' ), value: 'enlarge' },
                                                            { label: __( 'Open Link', 'kenzap-gallery' ), value: 'link' },
                                                            { label: __( 'Do Nothing', 'kenzap-gallery' ), value: 'nothing' },
                                                        ] }
                                                        onChange={ ( value ) => {
                                                            this.onChangePropertyItem( 'action', value, index, true );
                                                        } }
                                                    />
                                                    { item.action === 'link' &&
                                                    <div style={ { marginBottom: '5px' } }>
                                                        <TextControl
                                                            label={ __( 'Specify Link', 'kenzap-gallery' ) }
                                                            placeholder={ __( 'http://www.example.com' ) }
                                                            value={ item.link }
                                                            className="link-text"
                                                            onChange={ ( value ) => {
                                                                this.onChangePropertyItem( 'link', value, index, true );
                                                            } }
                                                        />
                                                        <ToggleControl
                                                            label={ __( 'Settings' ) }
                                                            help={ item.linkTarget ? __( 'Open link in new window.', 'kenzap-gallery' ) : __( 'Open link in current window', 'kenzap-gallery' ) }
                                                            checked={ item.linkTarget }
                                                            onChange={ ( value ) => {
                                                            this.onChangePropertyItem( 'linkTarget', value, index, true );
                                                        } }
                                                        />
                                                    </div>
                                                    }

                                                    <MediaUpload
                                                        onSelect={ ( media ) => {
                                                                let url = media.sizes['kp_l']?media.sizes['kp_l']['url']:media.url;
                                                                this.onChangePropertyItem( 'iconMediaId', media.id, index );
                                                                this.onChangePropertyItem( 'icon', url, index, true );
                                                                this.onChangePropertyItem( 'iconF', media.url, index, true );
                                                            } }
                                                        value={ item.iconMediaId }
                                                        //allowedTypes={ [ 'image', 'image/svg+xml' ] }
                                                        render={ ( props ) => (
                                                            <Button
                                                                isDefault
                                                                onClick={ props.open }
                                                                >
                                                                { __( 'Change image', 'kenzap-gallery' ) }
                                                            </Button>
                                                            ) }
                                                        />
                                                </div>
                                                <div>
                                                    <BaseControl
                                                        id="Change-filters-1"
                                                        label={ __( 'Change filters', 'kenzap-gallery' ) }
                                                    >
                                                        { attributes.filters.map( filter => {
                                                            return (
                                                                <CheckboxControl
                                                                    label={ filter.name }
                                                                    checked={ item.categories.indexOf( filter.class ) !== -1 || filter.class === '*' }
                                                                    key={ filter.class }
                                                                    onChange={ ( isChecked ) => {
                                                                        if ( isChecked ) {
                                                                            const currentFilters = [ ...item.categories ];
                                                                            currentFilters.push( filter.class );
                                                                            this.onChangePropertyItem( 'categories', currentFilters, index, true );
                                                                        } else {
                                                                            const currentFilters = [ ...item.categories ];
                                                                            currentFilters.forEach( ( itemFilter, i ) => {
                                                                                if ( filter.class === itemFilter ) {
                                                                                    currentFilters.splice( i, 1 );
                                                                                }
                                                                            } );
                                                                            this.onChangePropertyItem( 'categories', currentFilters, index, true );
                                                                        }
                                                                    } }
                                                                />
                                                            );
                                                        } ) }

                                                    </BaseControl>
                                                </div>
                                            </Popover>
                                            }
                                        </div>
                                    </div>
                                ) ) }
                            </div>
                            { attributes.nestedBlocks == 'bottom' && <InnerBlocks /> }
                        </div>
                        <div className="editPadding" />
                        <button
                            className="addWhite"
                            onClick={ this.addItem }>
                            <span><Plus /></span>{ __( 'Add new image', 'kenzap-gallery' ) }
                        </button>
                    </ContainerEdit>
                </div>
            </div>
        );
    }
}
