const { __ } = wp.i18n;
const { Component } = wp.element;
const { RichText, InspectorControls, PanelColorSettings, MediaUpload, InnerBlocks } = wp.editor;
const { RangeControl, PanelBody, Popover, TextControl, ToggleControl, Button, CheckboxControl, RadioControl, SelectControl } = wp.components;
import { defaultItem, getStyles, typographyArr } from './block';
import { InspectorContainer, ContainerEdit } from '../commonComponents/container/container';
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
                icon: (window.kenzap_cta_path + 'images/gallery-img-' + Math.round( 1 - 0.5 + ( Math.random() * ( 10 - 1 + 1 ) ) ) + '.jpg'),
            } ],
        } );
        setTimeout( () => {
            const element = document.querySelector( '.kenzap-gallery-3 .kp-list' );
            element.scrollLeft = element.scrollWidth;
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
                    icon: (window.kenzap_cta_path + 'images/gallery-img-' + Math.round( 1 - 0.5 + ( Math.random() * ( 10 - 1 + 1 ) ) ) + '.jpg'),
                } ],
            } );
        } else {
            items.splice( index, 1 );
            this.props.setAttributes( { items: items } );
        }
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
                            label={ __( 'Navigation', 'kenzap-gallery' ) }
                            checked={ attributes.isNavigationShow }
                            onChange={ ( isNavigationShow ) => {
                                setAttributes( { isNavigationShow } );
                            } }
                        />

                        <RadioControl
                            label={ __( 'Image Style', 'kenzap-gallery' ) }
                            selected={ attributes.displayType }
                            options={ [
                                { label: __( 'Horizontal', 'kenzap-gallery' ), value: 'kp-horizontal' },
                                { label: __( 'Square', 'kenzap-gallery' ), value: 'kp-square' },
                                { label: __( 'Vertical', 'kenzap-gallery' ), value: 'kp-vertical' },
                            ] }
                            onChange={ ( displayType ) => {
                                setAttributes( { displayType } );
                            } }
                            help={ __( 'Changes can be previewed on frontend only.', 'kenzap-gallery' ) }
                        />

                        <RadioControl
                            label={ __( 'Text Location', 'kenzap-gallery' ) }
                            selected={ attributes.textLocation }
                            options={ [
                                { label: __( 'Left', 'kenzap-gallery' ), value: 'textLeft' },
                                { label: __( 'Bottom', 'kenzap-gallery' ), value: 'textBottom' },
                                //{ label: __( 'Bottom center', 'kenzap-gallery' ), value: 'textBottomCenter' },
                                { label: __( 'Inside', 'kenzap-gallery' ), value: 'textInside' },
                                { label: __( 'Text Hidden', 'kenzap-gallery' ), value: 'textHidden' },
                            ] }
                            onChange={ ( textLocation ) => {
                                setAttributes( { textLocation } );
                            } }
                            help={ __( 'Changes can be previewed on frontend only.', 'kenzap-gallery' ) }
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
                            label={ __( 'Filter divider size', 'kenzap-gallery' ) }
                            value={ attributes.navigationSize }
                            onChange={ ( navigationSize ) => setAttributes( { navigationSize } ) }
                            min={ 10 }
                            max={ 130 }
                        />
                        <RangeControl
                            label={ __( 'Paddings between images', 'kenzap-gallery' ) }
                            value={ attributes.paddingsBetweenItems }
                            onChange={ ( paddingsBetweenItems ) => setAttributes( { paddingsBetweenItems } ) }
                            min={ 0 }
                            max={ 25 }
                        />
                        <RangeControl
                            label={ __( 'Number of Images', 'kenzap-gallery' ) }
                            value={ attributes.imageSize }
                            onChange={ ( imageSize ) => setAttributes( { imageSize } ) }
                            min={ 2 }
                            max={ 15 }
                            help={ __( 'Number of images to display per one row. The number is decreased automatically on tablet and mobile devices.', 'kenzap-gallery' ) }
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
                                    label: __( 'Underline', 'kenzap-gallery' ),
                                },
                                {
                                    value: attributes.overlayColor,
                                    disableAlpha: false,
                                    onChange: ( overlayColor ) => {
                                        return setAttributes( { overlayColor } );
                                    },
                                    label: __( 'Hover overlay', 'kenzap-gallery' ),
                                },

                            ] }
                        />
                        { attributes.textLocation === 'textInside' &&
                            <RangeControl
                                label={ __( 'Overlay Opacity', 'kenzap-gallery' ) }
                                value={ attributes.overlayOpacity }
                                onChange={ ( overlayOpacity ) => setAttributes( { overlayOpacity } ) }
                                min={ 0 }
                                max={ 100 }
                            />
                        }
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
                        className={ `kenzap-gallery-3 ${ attributes.hoverEffect } ${ attributes.textLocation } ${ attributes.displayType } kenzap-xs ${ isSelected ? 'selected' : '' } ` }
                        attributes={ attributes }
                        withBackground
                        withPadding
                    >
                        <div className="kenzap-container" style={ kenzapContanerStyles }>
                            { attributes.nestedBlocks == 'top' && <InnerBlocks /> }
                            { attributes.isNavigationShow &&
                            <ul className="kp-nav" style={ {...getTypography( attributes, 2, 'margin-bottom' ),...getTypography( attributes, 2, 'text-align' ) } }>
                                <li>
                                    <RichText
                                        tagName="span"
                                        className="gallery-pn gallery-prev"
                                        value={ attributes.prev }
                                        onChange={ ( value ) => setAttributes( { prev: value } ) }
                                        placeholder={ __( 'Prev', 'kenzap-gallery' ) }
                                        style={ getTypography( attributes, 2 ) }
                                    />
                                </li>
                                <li>
                                    <RichText
                                        tagName="span"
                                        className="gallery-pn gallery-next"
                                        value={ attributes.next }
                                        onChange={ ( value ) => setAttributes( { next: value } ) }
                                        placeholder={ __( 'Next', 'kenzap-gallery' ) }
                                        style={ getTypography( attributes, 2 ) }
                                    />
                                </li>
                            </ul>
                            }
                            <div className="kp-list">
                                { attributes.items && attributes.items.map( ( item, index ) => (
                                    <div
                                        key={ item.key }
                                        className={ `kp-item ${ this.state.popupVisibleIndex === index ? "selected":"" }`}
                                    >
                                        <button className="remove" onClick={ () => this.removeItem( index ) }>
                                            <span className="dashicons dashicons-no" title={index} />
                                        </button>

                                        <div className="gallery-box">
                                            <div className="kp-img">
                                                <img
                                                    src={ item.icon }
                                                    onClick={ () => {
                                                        this.setState( { popupVisibleIndex: index } );
                                                    } }
                                                    style={ {
                                                        cursor: 'pointer',
                                                        height: `200px`,
                                                        width: `auto`,
                                                    } }
                                                />

                                            </div>
                                            <div
                                                className="kp-info"
                                                onClick={ attributes.textLocation === 'textInside' ? () => {
                                                    this.setState( { popupVisibleIndex: index } );
                                                } : () => {} }
                                                style={ {
                                                    height: attributes.textLocation === 'textInside' ? `200px` : 'auto',
                                                    width: attributes.textLocation === 'textInside' ? `auto` : 'auto',
                                                } }
                                            >
                                                <h3
                                                    style={ getTypography( attributes, 0 ) }
                                                >
                                                    <a className="gallery-link" >
                                                        <RichText
                                                            tagName="span"
                                                            value={ item.title }
                                                            onChange={ ( value ) => this.onChangePropertyItem( 'title', value, index, true ) }
                                                            placeholder={ __( 'Title', 'kenzap-gallery' ) }
                                                            style={ getTypography( attributes, 0 ) }
                                                        />
                                                    </a>
                                                </h3>
                                                <ul style={ {...getTypography( attributes, 1, 'text-align' ) } }>
                                                    <li>
                                                        <a
                                                            style={ getTypography( attributes, 1 ) }
                                                        >
                                                            <RichText
                                                                tagName="span"
                                                                value={ item.description }
                                                                onChange={ ( value ) => this.onChangePropertyItem( 'description', value, index, true ) }
                                                                placeholder={ __( 'Description', 'kenzap-gallery' ) }
                                                                style={ getTypography( attributes, 1 ) }
                                                            />
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>

                                            { this.state.popupVisibleIndex === index &&
                                            <Popover
                                                focusOnMount={ false }
                                                className="kenzap-gallery-3-link-popover"
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
                                                </div>
                                                <div>
                                                    <MediaUpload
                                                        onSelect={ ( media ) => {
                                                            let url = media.sizes['kp_l']?media.sizes['kp_l']['url']:media.url;
                                                            this.onChangePropertyItem( 'iconMediaId', media.id, index );
                                                            this.onChangePropertyItem( 'icon', url, index, true );
                                                            this.onChangePropertyItem( 'iconF', media.url, index, true );
                                                        } }
                                                        value={ item.iconMediaId }
                                                        allowedTypes={ [ 'image', 'image/svg+xml' ] }
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
