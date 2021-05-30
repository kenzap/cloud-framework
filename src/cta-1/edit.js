const { __ } = wp.i18n;
const { Component, Fragment } = wp.element;
const { RichText, InspectorControls, MediaUpload, InnerBlocks } = wp.editor;
const { PanelBody, Button, TextControl, Popover, ToggleControl, RadioControl } = wp.components;
import { getStyles, typographyArr } from './block';
import { InspectorContainer, ContainerEdit, uo } from '../commonComponents/container/container';
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
                this.props.setAttributes( { isVisible: ! attributes.isVisible } );
            }
        };

        const showPopover = (visible) => {
            if(!visible) popoverVisible = false;
            this.props.setAttributes( { isVisible: visible } ); 
        };
                
        return (
            <div>
                <InspectorControls>
                    <PanelBody
                        title={ __( 'General', 'kenzap-cta' ) }
                        initialOpen={ false }
                        >
                        
                        <RadioControl
                            label={ __( 'Orientation', 'kenzap-cta' ) }
                            selected={ attributes.side }
                            options={ [
                                { label: __( 'Left', 'kenzap-cta' ), value: 'left' },
                                { label: __( 'Right', 'kenzap-cta' ), value: 'right' },
                            ] }
                            onChange={ ( side ) => setAttributes( { side } ) }
                        />
                        
                        <MediaUpload
                            onSelect={ ( media ) => {
                                    this.props.setAttributes( {
                                        ctaImage: media.url,
                                        ctaImageId: media.id,
                                    } );
                                } }
                            value={ attributes.ctaImageId }
                            allowedTypes={ [ 'image' ] }
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
                        className={ `kpcta1 block-${ attributes.blockUniqId } ${ isSelected ? 'selected' : '' } ` }
                        attributes={ attributes }
                        withBackground
                        withPadding
                        >

                        <div className="kenzap-container" style={ kenzapContanerStyles }>
                            { attributes.nestedBlocks == 'top' && <InnerBlocks /> }
                            <div class="kenzap-row">

                                { attributes.side == 'left' &&
                                    <div class="kenzap-col-6">
                                        <div class="kp-img" style={ { backgroundImage: attributes.ctaImage !='none' && `url(${ [ (attributes.ctaImage) ] })` } }></div>
                                    </div>
                                }

                                <div class="kenzap-col-6">
                                    <div 
                                        class={ `kp-content kp-${ attributes.side } `}
                                        style={ getTypography( attributes, 2, "text-align" ) }
                                        >

                                        <RichText
                                            tag="h2"
                                            className="kp-h2"
                                            value={ attributes.title }
                                            placeholder={ __( 'Title', 'kenzap-cta' ) }
                                            onChange={ ( title ) => setAttributes( { title } ) }
                                            style={ getTypography( attributes, 0 ) }
                                            />

                                        <RichText
                                            tag="p"
                                            className="kp-p"
                                            value={ attributes.description }
                                            placeholder={ __( 'Description', 'kenzap-cta' ) }
                                            onChange={ ( description ) => setAttributes( { description } ) }
                                            style={ getTypography( attributes, 1 ) }
                                            />

                                        <a isDefault style={ getTypography( attributes, 2 ) } className="kp-a bt2" onClick={ toggleVisible }>
                                            { attributes.btnText }
                                            { attributes.isVisible && (
                                         
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

                                                <button className="link-close button button-large" onClick={ () => { setTimeout(function(){ showPopover(false); },200); } } >
                                                    { __( 'Save & Close' ) }
                                                </button>
                                            </Popover>

                                            ) } 
                                    
                                        </a>

                                    </div>
                                </div>

                                { attributes.side == 'right' &&
                                    <div class="kenzap-col-6">
                                        <div class="kp-img" style={ { backgroundImage: attributes.ctaImage !='none' && `url(${ [ (attributes.ctaImage) ] })` } }></div>
                                    </div>
                                }

                            </div>
                            { attributes.nestedBlocks == 'bottom' && <InnerBlocks /> }                        
                        </div>
                    </ContainerEdit>
                </div>
            </div>
        );
    }
}
