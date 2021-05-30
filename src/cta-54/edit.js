const { __ } = wp.i18n; 
const { Component } = wp.element;
const { RichText, InspectorControls, PanelColorSettings, MediaUpload, InnerBlocks } = wp.editor;
const { RangeControl, PanelBody, Popover, TextControl, ToggleControl, Button, RadioControl, SelectControl } = wp.components;
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
        isTitlePopoverShow: false,
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
                        {/* <RangeControl
                            label={ __( 'Title Size', 'kenzap-gallery' ) }
                            value={ attributes.titleSize }
                            onChange={ ( titleSize ) => setAttributes( { titleSize } ) }
                            min={ 10 }
                            max={ 130 }
                        /> */}
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
                        className={ `kenzap-gallery-6 ${ attributes.hoverEffect } ${ isSelected ? 'selected' : '' } ` }
                        attributes={ attributes }
                        withBackground
                        withPadding
                    >
                        <div className="kenzap-container" style={ kenzapContanerStyles }>
                            { attributes.nestedBlocks == 'top' && <InnerBlocks /> }
                            <div className="kp-list">
                                <div className="kp-item">
                                    <div className="gallery-box">
                                        { attributes.items.map( ( item, index ) => (
                                            <div className="kp-img">
                                                <a
                                                    onClick={ () => {
                                                            this.setState( { popupVisibleIndex: index } );
                                                        } }
                                                >
                                                    <img src={ item.icon } alt="image" />
                                                </a>
                                                { index === 1 &&
                                                    <div className="kp-info" style={ { position: 'relative', ...getTypography( attributes, 0, 'text-align' ) } }>
                                                        <a
                                                            href="#"
                                                            onClick={
                                                                ( e ) => {
                                                                    e.stopPropagation();
                                                                    this.setState( { isTitlePopoverShow: true } );
                                                                } }
                                                            //style={ { fontSize: `${ attributes.titleSize }px` } }
                                                            >
                                                            <RichText
                                                                tag="div"
                                                                value={ item.title }
                                                                //fontSize={ attributes.titleSize }
                                                                placeholder={ __( 'Title', 'kenzap-gallery' ) }
                                                                onChange={ ( value ) => this.onChangePropertyItem( 'title', value, index, true ) }
                                                                style={ getTypography( attributes, 0 ) }
                                                            />
                                                        </a>
                                                        { this.state.isTitlePopoverShow &&
                                                        <Popover
                                                            focusOnMount={ false }
                                                            className="kenzap-gallery-6-link-popover"
                                                        >
                                                            <span
                                                                onClick={ () => {
                                                                        this.setState( { isTitlePopoverShow: false } );
                                                                    } }
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
                                                                <div style={ { marginBottom: '5px' } }>
                                                                    <TextControl
                                                                        label={ __( 'Specify Link', 'kenzap-gallery' ) }
                                                                        placeholder={ __( 'http://www.example.com' ) }
                                                                        value={ attributes.titleProps.link }
                                                                        className="link-text"
                                                                        onChange={ ( value ) => {
                                                                            setAttributes( { titleProps: { ...attributes.titleProps, link: value } } );
                                                                        } }
                                                                    />
                                                                    <ToggleControl
                                                                        label={ __( 'Settings' ) }
                                                                        help={ attributes.titleProps.linkTarget ? __( 'Open link in new window.', 'kenzap-gallery' ) : __( 'Open link in current window', 'kenzap-gallery' ) }
                                                                        checked={ attributes.titleProps.linkTarget }
                                                                        onChange={ ( value ) => {
                                                                            setAttributes( { titleProps: { ...attributes.titleProps, linkTarget: value } } );
                                                                        } }
                                                                    />
                                                                </div>
                                                            </div>
                                                        </Popover>
                                                        }
                                                    </div>
                                                    }

                                                { this.state.popupVisibleIndex === index &&
                                                    <Popover
                                                        focusOnMount={ false }
                                                        className="kenzap-gallery-6-link-popover"
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
                                                                    { label: __( 'Open Link', 'kenzap-gallery' ), value: 'link' },
                                                                    {
                                                                        label: __( 'Do Nothing', 'kenzap-gallery' ),
                                                                        value: 'nothing',
                                                                    },
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
                                            ) ) }
                                    </div>
                                </div>
                            </div>
                            { attributes.nestedBlocks == 'bottom' && <InnerBlocks /> }
                        </div>
                    </ContainerEdit>
                </div>
            </div>
        );
    }
}
