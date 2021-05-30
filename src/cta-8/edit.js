const { __ } = wp.i18n;
const { Component, Fragment } = wp.element;
const { RichText, InspectorControls, PanelColorSettings, MediaUpload, InnerBlocks } = wp.editor;
const { PanelBody, TextControl, ToggleControl, Button } = wp.components;
import { getStyles, typographyArr } from './block';
import { InspectorContainer, ContainerEdit, uo } from '../commonComponents/container/container';
import { TypographyContainer, getTypography } from '../commonComponents/typography/typography';

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

            this.props.setAttributes( { backgroundColor: 'transparent' } );
            this.props.setAttributes( { backgroundImage: (window.kenzap_cta_path + "images/cta-bg-9.jpg") } );
            this.props.setAttributes( { isFirstLoad: false } );
        }

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

                        <TextControl
                            label={ __( 'Left image link', 'kenzap-cta' ) }
                            value={ attributes.link }
                            onChange={ ( link ) => setAttributes( { link } ) }
                        />

                        <ToggleControl
                            label={ __( 'New window', 'kenzap-cta' ) }
                            checked={ attributes.linkNew }
                            onChange={ ( linkNew ) => setAttributes( { linkNew } ) }
                        />

                        <p style={ { marginBottom: '5px' } }>{ __( 'Right image', 'kenzap-cta' ) }</p>
                        <MediaUpload
                            onSelect={ ( media ) => {
                                    this.props.setAttributes( {
                                        ctaImage2: media.url,
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

                        <TextControl
                            label={ __( 'Right image link', 'kenzap-cta' ) }
                            value={ attributes.link2 }
                            onChange={ ( link2 ) => setAttributes( { link2 } ) }
                        />

                        <ToggleControl
                            label={ __( 'New window', 'kenzap-cta' ) }
                            checked={ attributes.linkNew2 }
                            onChange={ ( linkNew2 ) => setAttributes( { linkNew2 } ) }
                        />

                        <p style={ { marginBottom: '5px' } }>{ __( 'Phone Image', 'kenzap-cta' ) }</p>
                        <MediaUpload
                            onSelect={ ( media ) => {
                                    this.props.setAttributes( {
                                        phoneImage: media.sizes['kp_l']?media.sizes['kp_l']['url']:media.url,
                                        phoneImageId: media.id,
                                    } );
                                } }
                            value={ attributes.phoneImageId }
                            allowedTypes={ [ 'image' ] }
                            render={ ( mediaUploadProps ) => (

                            <Fragment>
                                { ( attributes.phoneImageId || attributes.phoneImage !== 'none' ) ? (
                                    <Fragment>
                                        <Button
                                            isDefault
                                            onClick={ () => {
                                                setAttributes( {
                                                    phoneImageId: '',
                                                    phoneImage: 'none',
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
                                                backgroundImage: `url(${ [ attributes.phoneImage ? (attributes.phoneImage) : '' ] })`,
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
                                    label: __( 'Text', 'kenzap-cta' ),
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
                        className={ `kpcta9 block-${ attributes.blockUniqId } ${ isSelected ? 'selected' : '' } ` }
                        attributes={ attributes }
                        withBackground
                        withPadding
                        >
 
                        <div className="kenzap-container" style={ kenzapContanerStyles }>
                            { attributes.nestedBlocks == 'top' && <InnerBlocks /> }
                            <div class="kenzap-row">
                                <div class="kenzap-col-6">
                                    <div class="kp-content">

                                        <RichText
                                            tagName="span"
                                            className="kp-sp"
                                            value={ attributes.pretitle }
                                            placeholder={ __( 'Above Title', 'kenzap-cta' ) }
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
                                            placeholder={ __( 'Description', 'kenzap-cta' ) }
                                            onChange={ ( description ) => setAttributes( { description } ) }
                                            style={ getTypography( attributes, 2 ) }
                                            />
                              
                                        <ul>
                                            { attributes.ctaImage!='none' && <li>
                                                <a href={ attributes.link }>
                                                    <img src={ (attributes.ctaImage) } alt={ __( 'App Store Icon', 'kenzap-cta' ) }/>
                                                </a>
                                            </li> }
                                            { attributes.ctaImage2!='none' && <li>
                                                <a href={ attributes.link2 }>
                                                    <img src={ (attributes.ctaImage2) } alt={ __( 'App Store Icon', 'kenzap-cta' ) }/>
                                                </a>
                                            </li> }

                                        </ul>

                                        <RichText
                                            tagName="p"
                                            className="kp-em"
                                            value={ attributes.aftertitle }
                                            placeholder={ __( 'Note', 'kenzap-cta' ) }
                                            onChange={ ( aftertitle ) => setAttributes( { aftertitle } ) }
                                            style={ getTypography( attributes, 3 ) }
                                            />
                                    </div>
                                </div>
                                <div class="kenzap-col-6">
                                    <div class="kp-img">
                                        { attributes.phoneImage != 'none' && <img 
                                        src={ (attributes.phoneImage) } alt={ __( 'Title', 'kenzap-cta' ) }
                                        /> }
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
