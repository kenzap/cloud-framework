const { __ } = wp.i18n; 
const { Component, Fragment } = wp.element;
const { RichText, InspectorControls, PanelColorSettings, MediaUpload, InnerBlocks } = wp.editor;
const { RangeControl, PanelBody, Button, TextControl } = wp.components;
import { getStyles, typographyArr } from './block';
import { InspectorContainer, ContainerEdit, uo } from '../commonComponents/container/container';
import { TypographyContainer, getTypography } from '../commonComponents/typography/typography';
import { linkPicker } from '../commonComponents/link/link';

/**
 * The edit function describes the structure of your block in the context of the editor.
 * This represents what the editor will render when the block is used.
 *
 * The "edit" property must be a valid function.
 * @param {Object} props - attributes
 * @returns {Node} rendered component
 */
export default class Edit extends Component {

    constructor(props){
        super(props);
        this.state = { popupVisibleIndex: -1 };
        this.handlePicker = this.handlePicker.bind(this);
        this.handlePicker2 = this.handlePicker2.bind(this);
    }

    handlePicker(){this.setState({ popupVisibleIndex: 0, });}
    handlePicker2(){this.setState({ popupVisibleIndex: 1, });}


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
                        title={ __( 'General', 'kenzap-cta' ) }
                        initialOpen={ false }
                        >
                            
                        <RangeControl
                            label={ __( 'Gradient opacity', 'kenzap-cta' ) }
                            value={ attributes.opacity }
                            onChange={ ( opacity ) => setAttributes( { opacity } ) }
                            min={ 1 }
                            max={ 100 }
                        />

                        <RangeControl
                            label={ __( 'Gradient angle', 'kenzap-cta' ) }
                            value={ attributes.angle }
                            onChange={ ( angle ) => setAttributes( { angle } ) }
                            min={ 0 }
                            max={ 360 }
                        />
               
                        <p style={ { marginBottom: '5px' } }>{ __( 'Bottom divider (SVG only)', 'kenzap-cta' ) }</p>
                        <MediaUpload
                            onSelect={ ( media ) => {
                                setAttributes( { img1: media.url } );
                            } }
                            value={ attributes.img1 }
                            //allowedTypes={ [ 'image/svg' ] }
                            render={ ( mediaUploadProps ) => (

                            <Fragment>
                                { ( attributes.img1 !== 'none' ) ? (
                                    <Fragment>
                                        <Button
                                            isDefault
                                            onClick={ () => { 
                                                setAttributes( { img1: 'none' } );
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
                                                backgroundImage: `url(${ [ attributes.img1 ? uo(attributes.img1) : '' ] })`,
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

                        <TextControl
                            label={__( 'Video', 'kenzap-cta' )}
                            value={ attributes.video }
                            onChange={ ( video ) => setAttributes( { video } ) }
                            help={ __( 'Specify background youtube video playback by id. Ex.: ctvlUvN6wSE', 'kenzap-cta' ) }
                        />
                        
                    </PanelBody>

                    <PanelColorSettings
                        title={ __( 'Colors', 'kenzap-cta' ) }
                        initialOpen={ false }
                        colorSettings={ [
                            {
                                value: attributes.textColor2,
                                onChange: ( value ) => {
                                    return setAttributes( { textColor2: value } );
                                },
                                label: __( 'Bold highlight', 'kenzap-cta' ),
                            },
                            {
                                value: attributes.textColor3,
                                onChange: ( value ) => {
                                    return setAttributes( { textColor3: value } );
                                },
                                label: __( 'Gradient start', 'kenzap-cta' ),
                            },
                            {
                                value: attributes.textColor4,
                                onChange: ( value ) => {
                                    return setAttributes( { textColor4: value } );
                                },
                                label: __( 'Gradient end', 'kenzap-cta' ),
                            },
                        ] }
                    />

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
                        className={ `kp-bn5 ${ attributes.video ? 'vid':'nvid' } block-${ attributes.blockUniqId } ${ isSelected ? 'selected' : '' } ` }
                        attributes={ attributes }
                        withBackground
                        withPadding
                        >

                        { attributes.video && 
                            <div> 
                                <div class="kp-video">
                                    <div id="video" data-video={ attributes.video }></div>
                                </div> 

                                <div class="kp-content" >
                                    <div class="kenzap-container" style={ kenzapContanerStyles }>
                                        { attributes.nestedBlocks == 'bottom' && <InnerBlocks /> }
                                        { attributes.title && <RichText
                                            tagName="h1"
                                            className="kpt"
                                            value={ attributes.title }
                                            placeholder={ __( 'Title', 'kenzap-cta' ) }
                                            onChange={ ( title ) => {
                                                setAttributes( { title: title } )
                                            } }
                                            style={ getTypography( attributes, 0 ) }
                                        /> }

                                        { attributes.caption && <RichText
                                            tagName="p"
                                            className="kpc"
                                            value={ attributes.caption }
                                            placeholder={ __( 'Text', 'kenzap-cta' ) }
                                            onChange={ ( caption ) => {
                                                setAttributes( { caption: caption } )
                                            } }
                                            style={ getTypography( attributes, 1 ) }
                                        /> }

                                        <a
                                            style={ getTypography( attributes, 2 ) }
                                            className="kpa" 
                                            onClick={ this.handlePicker }
                                            >
                                            { attributes.btnText ? attributes.btnText:"Button Text" }
                                            { this.state.popupVisibleIndex === 0 && linkPicker( this ) }
                                        </a>

                                        <a
                                            style={ getTypography( attributes, 3 ) }
                                            className="kpa" 
                                            onClick={ this.handlePicker2 }
                                            >
                                            { attributes.btnText2 ? attributes.btnText2:"Button Text" }
                                            { this.state.popupVisibleIndex === 1 && linkPicker( this ) }
                                        </a>

                                        { attributes.nestedBlocks == 'bottom' && <InnerBlocks /> }
                                    </div>
                                </div>
                            </div>
                        }

                        { !attributes.video && 

                            <div class="kenzap-container" style={ kenzapContanerStyles }>
                                { attributes.nestedBlocks == 'top' && <InnerBlocks /> }
                                <div class="kp-content" >
                                    <RichText
                                        tagName="h1"
                                        className="kpt"
                                        value={ attributes.title }
                                        placeholder={ __( 'Title', 'kenzap-cta' ) }
                                        onChange={ ( title ) => {
                                            setAttributes( { title: title } )
                                        } }
                                        style={ getTypography( attributes, 0 ) }
                                    /> 

                                    <RichText
                                        tagName="p"
                                        className="kpc"
                                        value={ attributes.caption }
                                        placeholder={ __( 'Text', 'kenzap-cta' ) }
                                        onChange={ ( caption ) => {
                                            setAttributes( { caption: caption } )
                                        } }
                                        style={ getTypography( attributes, 1 ) }
                                    />

                                    <a
                                        style={ getTypography( attributes, 2 ) }
                                        className="kpa" 
                                        onClick={ this.handlePicker }
                                        >
                                        { attributes.btnText ? attributes.btnText:"Button Text" }
                                        { this.state.popupVisibleIndex === 0 && linkPicker( this ) }
                                    </a>

                                    <a
                                        style={ getTypography( attributes, 3 ) }
                                        className="kpa" 
                                        onClick={ this.handlePicker2 }
                                        >
                                        { attributes.btnText2 ? attributes.btnText2:"Button Text" }
                                        { this.state.popupVisibleIndex === 1 && linkPicker( this ) }
                                    </a>

                                </div>
                                { attributes.nestedBlocks == 'bottom' && <InnerBlocks /> }
                            </div>
                            
                        }

                    </ContainerEdit>
                </div>
            </div>
        );
    }
}
