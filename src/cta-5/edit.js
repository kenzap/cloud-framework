const { __ } = wp.i18n;
const { Component, Fragment } = wp.element;
const { InspectorControls, PanelColorSettings, MediaUpload, InnerBlocks } = wp.editor;
const { RangeControl, PanelBody, TextControl, Popover, ToggleControl, Button } = wp.components;
import { getStyles, typographyArr } from './block';
import { InspectorContainer, ContainerEdit } from '../commonComponents/container/container';
import { TypographyContainer, getTypography } from '../commonComponents/typography/typography';

/**
 * Popover visibility toggle variable
 * @type {number}
 */
let popoverVisible = false;

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
        activeSubBlock: -1,
        showError: false,
    };

    timerId = 0;

    render() {
        const {
            className,
            attributes,
            setAttributes,
            isSelected,
        } = this.props;

        const { vars, kenzapContanerStyles } = getStyles( attributes );

        const toggleVisible = () => {

            if(!popoverVisible){
                popoverVisible = true;
                this.props.setAttributes( { isVisible: !attributes.isVisible } );
            }
        };

        const showPopover = (visible) => {
            if(!visible){
                 popoverVisible = false;
                this.props.setAttributes( { isVisible: !attributes.isVisible } );
            }
        };

        return (
            <div>
                <InspectorControls>
                    <PanelBody
                        title={ __( 'General', 'kenzap-cta' ) }
                        initialOpen={ false }
                        >
                                    
                        <RangeControl
                            label={ __( 'Icon size', 'kenzap-cta' ) }
                            value={ attributes.iconSize }
                            onChange={ ( iconSize ) => setAttributes( { iconSize } ) }
                            min={ 10 }
                            max={ 130 }
                        />

                        <p style={ { marginBottom: '5px' } }>{ __( 'Icon (SVG)', 'kenzap-cta' ) }</p>
                        <MediaUpload
                            onSelect={ ( media ) => {
                                    this.props.setAttributes( {
                                        ctaImage: media.url,
                                        ctaImageId: media.id,
                                    } );
                                } }
                            value={ attributes.ctaImageId }
                            //allowedTypes={ [ 'image/svg+xml' ] }
                            render={ ( mediaUploadProps ) => (

                            <Fragment>
                                { ( attributes.ctaImageId || attributes.ctaImage !== 'none' ) ? (
                                    <Fragment>
                                        <Button
                                            isDefault
                                            onClick={ () => {
                                                setAttributes( {
                                                    ctaImageId: '',
                                                    ctaImage: 'none',
                                                } );
                                            } }
                                        >
                                            { __( 'Remove', 'kenzap-cta' ) }
                                        </Button>
                                        <div
                                            style={ {
                                                width: '27px',
                                                height: '27px',
                                                display: 'inline-block',
                                                margin: '0 0 8px 5px',
                                                backgroundImage: `url(${ [ attributes.ctaImage ? (attributes.ctaImage) : '' ] })`,
                                                backgroundRepeat: 'no-repeat',
                                                backgroundSize: 'cover',
                                            } }
                                        />

                                    </Fragment>
                                ) : (
                                    <Button isDefault onClick={ mediaUploadProps.open } style={ { margin: '0 0 8px 0px', } }>
                                        { __( 'Upload/Choose', 'kenzap-cta' ) }
                                    </Button>
                                ) }
                            </Fragment>

                            ) }
                        />

                        <PanelColorSettings
                            title={ __( 'Colors', 'kenzap-cta' ) }
                            initialOpen={ false }
                            colorSettings={ [
                                {
                                    value: attributes.textColor,
                                    onChange: ( value ) => {
                                        return setAttributes( { textColor: value } );
                                    },
                                    label: __( 'Icon', 'kenzap-cta' ),
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
                        withPadding
                        withWidth100
                        withBackground
                        withAutoPadding
                        withNested
                    />
                    </InspectorControls>

                <div id={ attributes.anchor } className={ className ? className : '' } style={ vars }>
                    <ContainerEdit
                        className={ `kpcta6 block-${ attributes.blockUniqId } ${ isSelected ? 'selected' : '' } ` }
                        attributes={ attributes }
                        withBackground
                        withPadding
                        >

                        <div className="kenzap-container" style={ kenzapContanerStyles }>
                            { attributes.nestedBlocks == 'top' && <InnerBlocks /> }
                            <div 
                                class="kp-content"
                                style={ { 
                                    backgroundColor: attributes.textColor3 
                                } }
                                >

                                <a isDefault style={ getTypography( attributes, 0 ) } className="cta-btn-1" onClick={ toggleVisible } >
                                    <i style={ { width: `${ attributes.iconSize }px`, height: `${ attributes.iconSize }px` } } class="phone-icon"></i>
                                    { attributes.btnText ? attributes.btnText:"Button 1" }
                                    { popoverVisible && (
                                    
                                    <Popover
                                        className="kp-popover" >

                                        <TextControl
                                            label={ __( 'Link', 'kenzap-cta' ) }
                                            placeholder={ __( 'http://www.example.com' ) }
                                            value={ attributes.link }
                                            className="link-text"
                                            onChange={ ( link ) => setAttributes( { link } ) }
                                        />

                                        <ToggleControl
                                            label = { attributes.linkNew ? __( 'Open link in new window.', 'kenzap-cta' ) : __( 'Open link in current window', 'kenzap-cta' ) } 
                                            checked={ attributes.linkNew }
                                            onChange={ ( state ) => {
                                                
                                                setAttributes( { linkNew: state } );
                                                showPopover(true);
                                            } }
                                            onClick={
                                                showPopover(true)
                                            }
                                        />

                                        <TextControl
                                            label={ __( 'Button text', 'kenzap-cta' ) }
                                            placeholder={ __( 'View More' ) }
                                            value={ attributes.btnText }
                                            className="link-text"
                                            onChange={ ( btnText ) => setAttributes( { btnText } ) }
                                            onClick={
                                                showPopover(true)
                                            }
                                        />

                                        <button className="link-close button button-large" onClick={ () => { setTimeout(function(){ showPopover(false); },100); } } >
                                            { __( 'Save & Close' ) }
                                        </button>
                                    </Popover>

                                    ) } 
                            
                                </a>

                            </div>
                            { attributes.nestedBlocks == 'bottom' && <InnerBlocks /> }
                        </div>
                    </ContainerEdit>
                </div>
            </div>
        );
    }
}
