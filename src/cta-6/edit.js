const { __ } = wp.i18n;
const { Component, Fragment } = wp.element;
const { RichText, InspectorControls, PanelColorSettings, MediaUpload, InnerBlocks } = wp.editor;
const { RangeControl, PanelBody, TextControl, Popover, ToggleControl, Button } = wp.components;
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
                this.props.setAttributes( { isVisible: !attributes.isVisible } );
            }
        };

        if(attributes.isFirstLoad){

            console.log("FIRST");
            this.props.setAttributes( { backgroundColor: 'transparent' } );
            this.props.setAttributes( { isFirstLoad: false } );
        }
        
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
                            label={ __( 'Border width', 'kenzap-cta' ) }
                            value={ attributes.textThickness }
                            onChange={ ( textThickness ) => setAttributes( { textThickness } ) }
                            min={ 1 }
                            max={ 12 }
                        /> 

                        <RangeControl
                            label={ __( 'Border radius', 'kenzap-cta' ) }
                            value={ attributes.borderRadius }
                            onChange={ ( borderRadius ) => setAttributes( { borderRadius } ) }
                            min={ 0 }
                            max={ 70 }
                            help={ __( 'Adjust border radius of CTA container.', 'kenzap-cta' ) }
                        />

                        <p style={ { marginBottom: '5px' } }>{ __( 'Badge', 'kenzap-cta' ) }</p>
                        <MediaUpload
                            onSelect={ ( media ) => {
                                    this.props.setAttributes( {
                                        badgeImage: media.url,
                                        badgeImageId: media.id,
                                    } );
                                } }
                            value={ attributes.badgeImageId }
                            allowedTypes={ [ 'image' ] }
                            render={ ( mediaUploadProps ) => (

                            <Fragment>
                                { ( attributes.badgeImageId || attributes.badgeImage !== 'none' ) ? (
                                    <Fragment>
                                        <Button
                                            isDefault
                                            onClick={ () => {
                                                setAttributes( {
                                                    badgeImageId: '',
                                                    badgeImage: 'none',
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
                                                backgroundImage: `url(${ [ attributes.badgeImage ? attributes.badgeImage : '' ] })`,
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

                        <p style={ { marginBottom: '5px' } }>{ __( 'Featured', 'kenzap-cta' ) }</p>
                        <MediaUpload
                            onSelect={ ( media ) => {
                                    this.props.setAttributes( {
                                        ctaImage: media.sizes['kp_l']?media.sizes['kp_l']['url']:media.url,
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
                                    label: __( 'Border', 'kenzap-cta' ),
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
                        className={ `kpcta7 block-${ attributes.blockUniqId } ${ isSelected ? 'selected' : '' } ` }
                        attributes={ attributes }
                        withBackground
                        withPadding
                        >
 
                        <div className="kenzap-container" style={ kenzapContanerStyles }>
                            { attributes.nestedBlocks == 'top' && <InnerBlocks /> }
                            <div class="kenzap-row">
                                <div class="kenzap-col-6">
                                    <div 
                                        class="kp-img"
                                        style={ {
                                            backgroundImage: attributes.ctaImage != 'none' && `url('${ uo(attributes.ctaImage) }')`
                                        } }
                                    
                                    ></div>
                                </div>
                                <div class="kenzap-col-6">
                                    <div class="kp-content" style={ { borderWidth: attributes.textThickness } }>
                                        <div class="cta-stamp">
                                            { attributes.badgeImage != 'none' && <img 
                                                src={ uo(attributes.badgeImage) } alt={ __( 'Title', 'kenzap-cta' ) }
                                                /> }
                                        </div>

                                        <RichText
                                            tagName="span"
                                            className="kp-sp"
                                            value={ attributes.pretitle }
                                            placeholder={ __( 'Title', 'kenzap-cta' ) }
                                            onChange={ ( pretitle ) => setAttributes( { pretitle } ) }
                                            style={ getTypography( attributes, 0 ) }
                                            />

                                        <RichText
                                            tagName="h2"
                                            className="kp-h2"
                                            value={ attributes.title }
                                            placeholder={ __( 'Title', 'kenzap-cta' ) }
                                            onChange={ ( title ) => setAttributes( { title } ) }
                                            style={ getTypography( attributes, 1 ) }
                                            />
                                            
                                        <RichText
                                            tagName="p"
                                            className="kp-p"
                                            value={ attributes.description }
                                            placeholder={ __( 'Title', 'kenzap-cta' ) }
                                            onChange={ ( description ) => setAttributes( { description } ) }
                                            style={ getTypography( attributes, 2 ) }
                                            />

                                        <a isDefault className="cta-btn-1" style={ getTypography( attributes, 3 ) } onClick={ toggleVisible } >
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
