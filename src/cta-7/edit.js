const { __ } = wp.i18n;
const { Component, Fragment } = wp.element;
const { InspectorControls, PanelColorSettings, MediaUpload, InnerBlocks } = wp.editor;
const { RangeControl, PanelBody, TextControl, Popover, ToggleControl, Button } = wp.components;
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

        if(attributes.isFirstLoad){

            console.log("FIRST");
            this.props.setAttributes( { backgroundColor: 'transparent' } );
            this.props.setAttributes( { isFirstLoad: false } );
        }

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

                        <p style={ { marginBottom: '5px' } }>{ __( 'Left image', 'kenzap-cta' ) }</p>
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

                        <p style={ { marginBottom: '5px' } }>{ __( 'Right image', 'kenzap-cta' ) }</p>
                        <MediaUpload
                            onSelect={ ( media ) => {
                                    this.props.setAttributes( {
                                        ctaImage2: media.sizes['kp_l']?media.sizes['kp_l']['url']:media.url,
                                        ctaImage2Id: media.id,
                                    } );
                                } }
                            value={ attributes.ctaImage2Id }
                            allowedTypes={ [ 'image' ] }
                            render={ ( mediaUploadProps ) => (

                            <Fragment>
                                { ( attributes.ctaImage2Id || attributes.ctaImage2 !== 'none' ) ? (
                                    <Fragment>
                                        <Button
                                            isDefault
                                            onClick={ () => {
                                                setAttributes( {
                                                    ctaImage2Id: '',
                                                    ctaImage2: 'none',
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
                                                backgroundImage: `url(${ [ attributes.ctaImage2 ? (attributes.ctaImage2) : '' ] })`,
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
                                    value: attributes.textColor0,
                                    onChange: ( value ) => {
                                        return setAttributes( { textColor0: value } );
                                    },
                                    label: __( 'Note', 'kenzap-cta' ),
                                },
                                {
                                    value: attributes.textColor2,
                                    onChange: ( value ) => {
                                        return setAttributes( { textColor2: value } );
                                    },
                                    label: __( 'Title', 'kenzap-cta' ),
                                },
                                {
                                    value: attributes.textColor4,
                                    onChange: ( value ) => {
                                        return setAttributes( { textColor4: value } );
                                    },
                                    label: __( 'Overlay', 'kenzap-cta' ),
                                },
                            ] }
                        />

                        <PanelColorSettings
                            title={ __( 'Colors hover', 'kenzap-cta' ) }
                            initialOpen={ false }
                            colorSettings={ [
                                {
                                    value: attributes.textColor,
                                    onChange: ( value ) => {
                                        return setAttributes( { textColor: value } );
                                    },
                                    label: __( 'Note', 'kenzap-cta' ),
                                },
                                {
                                    value: attributes.textColor22,
                                    onChange: ( value ) => {
                                        return setAttributes( { textColor22: value } );
                                    },
                                    label: __( 'Title', 'kenzap-cta' ),
                                },
                                {
                                    value: attributes.textColor3,
                                    onChange: ( value ) => {
                                        return setAttributes( { textColor3: value } );
                                    },
                                    label: __( 'Overlay', 'kenzap-cta' ),
                                },
                            ] }
                        />

                        <RangeControl
                            label={ __( 'Overlay opacity', 'kenzap-cta' ) }
                            value={ attributes.ovOpacity }
                            onChange={ ( ovOpacity ) => setAttributes( { ovOpacity } ) }
                            min={ 0 }
                            max={ 100 }
                            help={ __( 'Image overlay opacity level.', 'kenzap-cta' ) }
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
                        className={ `kpcta8 block-${ attributes.blockUniqId } ${ isSelected ? 'selected' : '' } ` }
                        attributes={ attributes }
                        withBackground
                        withPadding
                        >
 
                        <div className="kenzap-container" style={ kenzapContanerStyles }>
                            { attributes.nestedBlocks == 'top' && <InnerBlocks /> }
                            <div class="kenzap-row">
                                <div class="kenzap-col-6">
                                    <div 
                                        class="kp-content kp-img" 
                                        style={ {
                                            backgroundImage: attributes.ctaImage=='none' ? 'none':`url('${ (attributes.ctaImage) }')`
                                        } }
                                        >

                                        <a isDefault className="cta-btn-1"  style={ getTypography( attributes, 1 ) } onClick={ toggleVisible } >
                                            { attributes.btnTextPre !='' && <span  style={ getTypography( attributes, 0 ) }>{ attributes.btnTextPre }</span> }
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
                                                    label={ __( 'Description', 'kenzap-cta' ) }
                                                    value={ attributes.btnTextPre }
                                                    className="link-text"
                                                    onChange={ ( btnTextPre ) => setAttributes( { btnTextPre } ) }
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
                                <div class="kenzap-col-6">
                                    <div 
                                        class="kp-content kp-img"  
                                        style={ {
                                            backgroundImage: attributes.ctaImage2=='none' ? 'none' : `url('${ (attributes.ctaImage2) }')`
                                        } }
                                        >

                                        <a isDefault className="cta-btn-2"  style={ getTypography( attributes, 1 ) } onClick={ toggleVisible2 } >
                                            { attributes.btnText2Pre !='' && <span style={ getTypography( attributes, 0 ) }>{ attributes.btnText2Pre }</span> }
                                            { attributes.btnText2 ? attributes.btnText2:"Button 1" }
                                            { popoverVisible2 && (
                                            
                                            <Popover
                                                className="kp-popover" >

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
                                                    label={ __( 'Description', 'kenzap-cta' ) }
                                                    value={ attributes.btnText2Pre }
                                                    className="link-text"
                                                    onChange={ ( btnText2Pre ) => setAttributes( { btnText2Pre } ) }
                                                    onClick={
                                                        showPopover2(true)
                                                    }
                                                />

                                                <TextControl
                                                    label={ __( 'Title', 'kenzap-cta' ) }
                                                    value={ attributes.btnText2 }
                                                    className="link-text"
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
