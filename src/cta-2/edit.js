const { __ } = wp.i18n;
const { Component, Fragment } = wp.element;
const { RichText, InspectorControls, PanelColorSettings, MediaUpload, InnerBlocks } = wp.editor;
const { PanelBody, TextControl, Popover, ToggleControl, Button } = wp.components;
import { getStyles, typographyArr } from './block';
import { InspectorContainer, ContainerEdit, uo } from '../commonComponents/container/container';
import { TypographyContainer, getTypography } from '../commonComponents/typography/typography';

/**
 * Popover visibility toggle variable
 * @type {number}
 */
let popoverVisible = false;
let popoverVisible2 = false;

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

        const toggleVisible2 = () => {

            if(!popoverVisible2){
                popoverVisible2 = true;
                this.props.setAttributes( { isVisible: !attributes.isVisible } );
            }
        };

        const showPopover = (visible) => {
            if(!visible){
                 popoverVisible = false;
                this.props.setAttributes( { isVisible: !attributes.isVisible } );
            }
        };

        const showPopover2 = (visible) => {
            if(!visible){
                 popoverVisible2 = false;
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
                                
                        <p style={ { marginBottom: '5px' } }>{ __( 'Icon (SVG only)', 'kenzap-cta' ) }</p>
                        <MediaUpload
                            onSelect={ ( media ) => {
                                    this.props.setAttributes( {
                                        ctaImage: media.url,
                                        ctaImageId: media.id,
                                    } );
                                } }
                            value={ attributes.ctaImageId }
                            allowedTypes={ [ 'image/svg' ] }
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
                                                backgroundImage: `url(${ [ attributes.ctaImage ? uo(attributes.ctaImage) : '' ] })`,
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
                                    label: __( 'Highlight', 'kenzap-cta' ),
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
                        className={ `kpcta2 block-${ attributes.blockUniqId } ${ isSelected ? 'selected' : '' } ` }
                        attributes={ attributes }
                        withBackground
                        withPadding
                        >

                        <div className="kenzap-container" style={ kenzapContanerStyles }>
                            { attributes.nestedBlocks == 'top' && <InnerBlocks /> }
                            <div 
                                class="kp-content"
                                >
                                <RichText
                                    tag="h2"
                                    className="kp-h2"
                                    value={ attributes.title }
                                    placeholder={ __( 'Title', 'kenzap-cta' ) }
                                    onChange={ ( title ) => setAttributes( { title } ) }
                                    style={ getTypography( attributes, 0 ) }
                                    />
                                <ul>
                                    <li>
                                        <i class="phone-icon"></i>
                                        <RichText
                                            tag="span"
                                            className="kp-cta"
                                            value={ attributes.description }
                                            placeholder={ __( 'CTA text', 'kenzap-cta' ) }
                                            onChange={ ( description ) => setAttributes( { description } ) }
                                            style={ getTypography( attributes, 1 ) }
                                            />
                                    
                                        <a isDefault  style={ getTypography( attributes, 2 ) } className="kp-a phone" target={ attributes.linknew ? '_blank':'_self' } onClick={ toggleVisible }>
                                            { attributes.btnText ? attributes.btnText:"number" }
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
                                    
                                    </li>
                                    <li>
                                        <a class="cta-btn" style={ getTypography( attributes, 3 ) } target={ attributes.linknew ? '_blank':'_self' } onClick={ toggleVisible2 }>
                                
                                        { attributes.btnText2 ? attributes.btnText2:"button text" }
                                        { popoverVisible2 && (
                                        
                                        <Popover
                                            className="kp-popover"
                                            >

                                            <TextControl
                                                label={ __( 'Link', 'kenzap-cta' ) }
                                                placeholder={ __( 'http://www.example.com' ) }
                                                value={ attributes.link2 }
                                                className="link-text"
                                                onChange={ ( link2 ) => setAttributes( { link2 } ) }
                                            />

                                            <ToggleControl
                                                label = { attributes.linkNew2 ? __( 'Open link in new window.', 'kenzap-cta' ) : __( 'Open link in current window', 'kenzap-cta' ) } 
                                                checked={ attributes.linkNew2 }
                                                onChange={ ( state ) => {
                                                    
                                                    setAttributes( { linkNew2: state } );
                                                    showPopover2(true);
                                                } }
                                                onClick={
                                                    showPopover2(true)
                                                }
                                            />

                                            <TextControl
                                                label={ __( 'Button text', 'kenzap-cta' ) }
                                                placeholder={ __( 'View More', 'kenzap-cta' ) }
                                                value={ attributes.btnText2 }
                                                className="link-text bt1"
                                                onChange={ ( btnText2 ) => setAttributes( { btnText2 } ) }
                                                onClick={
                                                    showPopover2(true)
                                                }
                                            />

                                            <button className="link-close button button-large" onClick={ () => { setTimeout(function(){ showPopover2(false); },100); } } >
                                                { __( 'Save & Close' ) }
                                            </button>
                                        </Popover>

                                        ) } 

                                        </a>
                                    </li>
                                </ul>
                            </div>
                            { attributes.nestedBlocks == 'bottom' && <InnerBlocks /> }
                        </div>
                    </ContainerEdit>
                </div>
            </div>
        );
    }
}
