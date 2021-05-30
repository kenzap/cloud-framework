const { __ } = wp.i18n; 
const { Component, Fragment } = wp.element;
const { RichText, InspectorControls, PanelColorSettings, MediaUpload, InnerBlocks } = wp.editor;
const { PanelBody, Popover, TextControl, ToggleControl, Button, RadioControl } = wp.components;
import { getStyles, typographyArr } from './block';
import { InspectorContainer, ContainerEdit } from '../commonComponents/container/container';
import { TypographyContainer, getTypography } from '../commonComponents/typography/typography';

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

    render() {
        const {
            className,
            attributes,
            setAttributes,
            isSelected,
        } = this.props;

        const { vars, kenzapContanerStyles } = getStyles( attributes );

        // recalc vertical offset if left image is too small
        if (typeof kenzapG7 === 'function') { kenzapG7($); }

        return (
            <div>
                <InspectorControls>
                    <PanelBody
                        title={ __( 'General', 'kenzap-gallery' ) }
                        initialOpen={ true }
                    >
                        { attributes.items.map( ( item, index ) => (
                            <Fragment key={ item.key }>
                                <p style={ { margin: '15px 0 15px' } }>{ __( 'Image', 'kenzap-gallery' ) } { index === 0 ? __( '1', 'kenzap-gallery' ) : __( '2', 'kenzap-gallery' ) }</p>
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
                                <MediaUpload
                                    onSelect={ ( media ) => {
                                        let url = media.sizes['kp_l']?media.sizes['kp_l']['url']:media.url;
                                        this.onChangePropertyItem( 'iconMediaId', media.id, index );
                                        this.onChangePropertyItem( 'icon', url, index, true );
                                        this.onChangePropertyItem( 'iconF', media.url, index, true );
                                    } }
                                    value={ item.iconMediaId }
                                    allowedTypes={ [ 'image' ] }
                                    render={ ( mediaUploadProps ) => (
                                        <Fragment>
                                            { ( item.icon ) ? (
                                                <Fragment>
                                                    <Button
                                                        isDefault
                                                        onClick={ () => {
                                                            this.onChangePropertyItem( 'iconMediaId', '', index );
                                                            this.onChangePropertyItem( 'icon', '', index, true );
                                                        } }
                                                    >
                                                        { __( 'Remove', 'kenzap-gallery' ) }
                                                    </Button>
                                                    <div
                                                        style={ {
                                                            width: '27px',
                                                            height: '27px',
                                                            display: 'inline-block',
                                                            margin: '0 0 0 5px',
                                                            backgroundImage: `url(${ [ item.icon ? item.icon : '' ] })`,
                                                            backgroundRepeat: 'no-repeat',
                                                            backgroundSize: 'cover',
                                                        } }
                                                    />
                                                </Fragment>
                                            ) : (
                                                <Button isDefault onClick={ mediaUploadProps.open }>
                                                    { __( 'Upload/Choose', 'kenzap-gallery' ) }
                                                </Button>
                                            ) }
                                        </Fragment>

                                    ) }
                                />
                            </Fragment>
                        ) )
                        }
                        <PanelColorSettings
                            title={ __( 'Colors', 'kenzap-gallery' ) }
                            initialOpen={ false }
                            colorSettings={ [
                                {
                                    value: attributes.titleColor,
                                    onChange: ( titleColor ) => {
                                        return setAttributes( { titleColor } );
                                    },
                                    label: __( 'Divider', 'kenzap-gallery' ),
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
                        className={ `kenzap-gallery-7 ${ isSelected ? 'selected' : '' } ` }
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
                                            <div className={ `kp-img kp-img${ index } ` }>
                                                <a>
                                                    <img src={ item.icon } alt="" />
                                                </a>
                                                { index === 1 &&
                                                    <div className="kp-info" style={ { position: 'relative' } }>
                                                     
                                                        <RichText
                                                            className="kp-h3"
                                                            tag="h3"
                                                            value={ item.title }
                                                            placeholder={ __( 'Title', 'kenzap-gallery' ) }
                                                            onChange={ ( value ) => this.onChangePropertyItem( 'title', value, index, true ) }
                                                            style={ getTypography( attributes, 0 ) }
                                                        />
                                                        <p>
                                                            <RichText
                                                                tag="span"
                                                                value={ item.description }
                                                                placeholder={ __( 'Title', 'kenzap-gallery' ) }
                                                                onChange={ ( value ) => this.onChangePropertyItem( 'description', value, index, true ) }
                                                                style={ getTypography( attributes, 1 ) }
                                                            />
                                                        </p>
                                                        <div style={ { position: 'relative' } }>
                                                            <a
                                                                href="#"
                                                                className="kp-a"
                                                                onClick={
                                                                ( e ) => {
                                                                    e.stopPropagation();
                                                                    this.setState( { isTitlePopoverShow: true } );
                                                                } }
                                                                style={ { ...getTypography( attributes, 2 ), position: 'relative' } }
                                                                formattingControls={[]}
                                                            >
                                                                <RichText
                                                                    tag="span"
                                                                    value={ item.buttonText }
                                                                    placeholder={ __( 'Button Text', 'kenzap-gallery' ) }
                                                                    onChange={ ( value ) => this.onChangePropertyItem( 'buttonText', value, index, true ) }
                                                            />
                                                            </a>
                                                            { this.state.isTitlePopoverShow &&
                                                            <Popover
                                                                focusOnMount={ false }
                                                                className="kenzap-gallery-7-link-popover"
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
                                                                            value={ attributes.buttonProps.link }
                                                                            className="link-text"
                                                                            onChange={ ( value ) => {
                                                                                setAttributes( { buttonProps: { ...attributes.buttonProps, link: value } } );
                                                                            } }
                                                                        />
                                                                        <ToggleControl
                                                                            label={ __( 'Settings' ) }
                                                                            help={ attributes.buttonProps.linkTarget ? __( 'Open link in new window.', 'kenzap-gallery' ) : __( 'Open link in current window', 'kenzap-gallery' ) }
                                                                            checked={ attributes.buttonProps.linkTarget }
                                                                            onChange={ ( value ) => {
                                                                                setAttributes( { buttonProps: { ...attributes.buttonProps, linkTarget: value } } );
                                                                            } }
                                                                        />
                                                                    </div>
                                                                </div>
                                                            </Popover>
                                                            }
                                                        </div>
                                                    </div>
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
