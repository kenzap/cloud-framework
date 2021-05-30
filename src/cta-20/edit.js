const { __ } = wp.i18n; 
const { Component, Fragment } = wp.element;
const { RichText, InspectorControls, PanelColorSettings, MediaUpload, InnerBlocks} = wp.editor;
const { RangeControl, PanelBody, Button, TextControl } = wp.components;
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
 
        return (
            <div>
                <InspectorControls>
                    <PanelBody
                        title={ __( 'General', 'kenzap-cta' ) }
                        initialOpen={ false }
                        >
                            
                        <RangeControl
                            label={ __( 'Border radius', 'kenzap-cta' ) }
                            value={ attributes.borderRadius }
                            onChange={ ( borderRadius ) => setAttributes( { borderRadius } ) }
                            min={ 0 }
                            max={ 60 }
                        />

                        <RangeControl
                            label={ __( 'Border width', 'kenzap-cta' ) }
                            value={ attributes.textThickness }
                            onChange={ ( textThickness ) => setAttributes( { textThickness } ) }
                            min={ 1 }
                            max={ 10 }
                        />

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

                        <p style={ { marginBottom: '5px' } }>{ __( 'Location icon (SVG only)', 'kenzap-cta' ) }</p>
                        <MediaUpload
                            onSelect={ ( media ) => {
                                setAttributes( { img1: media.url } );
                            } }
                            value={ attributes.img1 }
                            allowedTypes={ [ 'image/svg' ] }
                            render={ ( mediaUploadProps ) => (

                            <Fragment>
                                { ( attributes.img1 != 'none' ) ? (
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

                        <RangeControl
                            label={ __( 'Location icon size', 'kenzap-cta' ) }
                            value={ attributes.img1Size }
                            onChange={ ( img1Size ) => setAttributes( { img1Size } ) }
                            min={ 0 }
                            max={ 50 }
                        />

                        <p style={ { marginBottom: '5px' } }>{ __( 'Search icon (SVG only)', 'kenzap-cta' ) }</p>
                        <MediaUpload
                            onSelect={ ( media ) => {
                                setAttributes( { img2: media.url } );
                            } }
                            value={ attributes.img2 }
                            allowedTypes={ [ 'image/svg' ] }
                            render={ ( mediaUploadProps ) => (

                            <Fragment>
                                { ( attributes.img2 != 'none' ) ? (
                                    <Fragment>
                                        <Button
                                            isDefault
                                            onClick={ () => { 
                                                setAttributes( { img2: 'none' } );
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
                                                backgroundImage: `url(${ [ attributes.img2 ? uo(attributes.img2) : '' ] })`,
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

                        <RangeControl
                            label={ __( 'Search icon size', 'kenzap-cta' ) }
                            value={ attributes.img2Size }
                            onChange={ ( img2Size ) => setAttributes( { img2Size } ) }
                            min={ 0 }
                            max={ 100 }
                        />

                        <TextControl
                            label={__( 'Action', 'kenzap-cta' )}
                            value={ attributes.action }
                            onChange={ ( action ) => setAttributes( { action } ) }
                            help={ __( 'Define input search page after user hits enter.', 'kenzap-cta' ) }
                        />
                        
                        <TextControl
                            label={__( 'Search text', 'kenzap-cta' )}
                            value={ attributes.search }
                            onChange={ ( search ) => setAttributes( { search } ) }
                            help={ __( 'Define input search field placeholder text.', 'kenzap-cta' ) }
                        />
                        
                    </PanelBody>

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
                        className={ `kp-bn3 block-${ attributes.blockUniqId } ${ isSelected ? 'selected' : '' } ` }
                        attributes={ attributes }
                        withBackground
                        withPadding
                        >

                        <div class="kenzap-container" style={ kenzapContanerStyles }>
                            { attributes.nestedBlocks == 'top' && <InnerBlocks /> }
                            <div class="kp-content">

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
                                    placeholder={ __( 'Caption', 'kenzap-cta' ) }
                                    onChange={ ( caption ) => {
                                        setAttributes( { caption: caption } )
                                    } }
                                    style={ getTypography( attributes, 1 ) }
                                    />

                                <div class="kps">
                                    <form action={ attributes.action } >
                                        <input name="q" type="text" style={ getTypography( attributes, 2 ) } placeholder={ attributes.search }/>
                                        <span class="kpi"></span>
                                    </form>
                                </div>

                                <div class="kpl">
                                    <p>
                                        <span class="kpim" ></span>
                                        <RichText
                                            tagName="div"
                                            className="kp-s"
                                            value={ attributes.link }
                                            placeholder={ __( 'Call to action text', 'kenzap-cta' ) }
                                            onChange={ ( link ) => {
                                                setAttributes( { link: link } )
                                            } }
                                            style={ getTypography( attributes, 3 ) }
                                            />
                                    </p>
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
