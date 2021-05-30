const { __ } = wp.i18n;
const { Component, Fragment } = wp.element;
const { RichText, InspectorControls, PanelColorSettings, MediaUpload, InnerBlocks } = wp.editor;
const { PanelBody, RadioControl, Button, TextControl, ToggleControl, Popover } = wp.components;
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
 
        if(attributes.isFirstLoad){

            this.props.setAttributes( { backgroundColor: '#fff' } );
            this.props.setAttributes( { isFirstLoad: false } );
        }

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

        const getImage = () => {
            return(
                <div class="kenzap-col-6">
                    <div class="kp-img">
                        <div class="ba-slider">
                        <img src={ uo(attributes.img1) } />
                        <div class="resize">
                            <img src={ uo(attributes.img2) } />
                            <RichText
                                tagName="span"
                                className="after-txt"
                                placeholder={ __( 'After', 'kenzap-cta' ) }
                                value={ attributes.txtAfter }
                                onChange={ ( txtAfter ) => setAttributes( { txtAfter } ) }
                                style={ getTypography( attributes, 3 ) }
                                />
                        </div>
                        <span class="handle"></span>
                            <RichText
                                tagName="span"
                                className="before-txt"
                                placeholder={ __( 'Before', 'kenzap-cta' ) }
                                value={ attributes.txtBefore }
                                onChange={ ( txtBefore ) => setAttributes( { txtBefore } ) }
                                style={ getTypography( attributes, 3 ) }
                                />
                        </div>
                    </div>
                </div>
            );
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
                            selected={ attributes.orientation }
                            options={ [
                                { label: __( 'Left', 'kenzap-cta' ), value: 'left' },
                                { label: __( 'Right', 'kenzap-cta' ), value: 'right' },
                            ] }
                            onChange={ ( val ) => { 
                                setAttributes( { "orientation":val } );
                                setTimeout(function(){beforeAfter($);},200);
                            } }
                        />
                        
                        <p style={ { marginBottom: '5px' } }>{ __( 'Left image', 'kenzap-cta' ) }</p>
                        <MediaUpload
                            onSelect={ ( media ) => {
                                setAttributes( { "img1":media.sizes['kp_l']?media.sizes['kp_l']['url']:media.url, "alt1":media.alt } )
                            } }
                            value={ attributes.img1 }
                            allowedTypes={ [ 'image' ] }
                            render={ ( mediaUploadProps ) => (

                            <Fragment>
                                { ( attributes.img1 !== 'none' ) ? (
                                    <Fragment>
                                        <Button
                                            isDefault
                                            onClick={ () => { 
                                                setAttributes( { "img1":'none' } )
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
                                                backgroundImage: `url(${ [ attributes.img1 ? attributes.img1 : '' ] })`,
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

                        <p style={ { marginBottom: '5px' } }>{ __( 'Rigt image', 'kenzap-cta' ) }</p>
                        <MediaUpload
                            onSelect={ ( media ) => {
                                setAttributes( { "img2":media.sizes['kp_l']?media.sizes['kp_l']['url']:media.url, "alt1":media.alt } )
                            } }
                            value={ attributes.img2 }
                            allowedTypes={ [ 'image' ] }
                            render={ ( mediaUploadProps ) => (

                            <Fragment>
                                { ( attributes.img2 !== 'none' ) ? (
                                    <Fragment>
                                        <Button
                                            isDefault
                                            onClick={ () => { 
                                                setAttributes( { "img2":'none' } )
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
                                                backgroundImage: `url(${ [ attributes.img2 ? attributes.img2 : '' ] })`,
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
                                    value: attributes.textColor2,
                                    onChange: ( value ) => {
                                        return setAttributes( { textColor2: value } );
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
                    
                <div id={ attributes.anchor } className={ className ? className : '' } style={ vars } >
                    <ContainerEdit
                        className={ `kpinf9 kp-${ attributes.orientation } block-${ attributes.blockUniqId } ${ isSelected ? 'selected' : '' } ` }
                        attributes={ attributes }
                        withBackground
                        withPadding
                        >
 
                        <div className="kenzap-container" style={ kenzapContanerStyles }>
                            { attributes.nestedBlocks == 'top' && <InnerBlocks /> }
                            <div class="kenzap-row">
                                <div class="info-box">

                                    { attributes.orientation == 'left' && getImage() }
                                    
                                    <div class="kenzap-col-6">
                                        <div class="kp-content">

                                            <RichText
                                                tagName="h2"
                                                className="kp-h2"
                                                value={ attributes.title }
                                                placeholder={ __( 'Title', 'kenzap-cta' ) }
                                                onChange={ ( title ) => setAttributes( { title } ) }
                                                style={ getTypography( attributes, 0 ) }
                                                />

                                            <RichText
                                                tagName="p"
                                                className="kp-p"
                                                value={ attributes.description }
                                                placeholder={ __( 'Description', 'kenzap-cta' ) }
                                                onChange={ ( description ) => setAttributes( { description } ) }
                                                style={ getTypography( attributes, 1 ) }
                                                />

                                            <a isDefault style={ getTypography( attributes, 2 ) } className="cta-btn-1" onClick={ toggleVisible } >
                                                { attributes.btnTextPre !='' && <span>{ attributes.btnTextPre }</span> }
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
                                                        label={ __( 'Title', 'kenzap-cta' ) }
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

                                    { attributes.orientation == 'right' && getImage() }

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
