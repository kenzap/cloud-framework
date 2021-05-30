const { __ } = wp.i18n;
const { Component, Fragment } = wp.element;
const { RichText, InspectorControls, PanelColorSettings, MediaUpload, InnerBlocks } = wp.editor;
const { RangeControl, CheckboxControl, PanelBody, Button, TextControl } = wp.components;
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
               
                        <p style={ { marginBottom: '5px' } }>{ __( 'Icon (SVG only)', 'kenzap-cta' ) }</p>
                        <MediaUpload
                            onSelect={ ( media ) => {
                                setAttributes( { img1: media.url } );
                            } }
                            value={ attributes.img1 }
                            allowedTypes={ [ 'image/svg' ] }
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

                        <RangeControl
                            label={ __( 'Icon size', 'kenzap-cta' ) }
                            value={ attributes.img1Size }
                            onChange={ ( img1Size ) => setAttributes( { img1Size } ) }
                            min={ 0 }
                            max={ 200 }
                        />

                        <TextControl
                            label={__( 'Video', 'kenzap-cta' )}
                            value={ attributes.video }
                            onChange={ ( video ) => setAttributes( { video } ) }
                            help={ __( 'Specify youtube or vimeo video link. Ex.: ctvlUvN6wSE', 'kenzap-cta' ) }
                        />
                        
                        <CheckboxControl
                            label={ __( 'Popup', 'kenzap-cta' ) }
                            checked={ attributes.action }
                            onChange={ ( action ) => {
                                setAttributes( {
                                    action: action,
                                } );
                            } }
                            help={ __( 'Open video as popup or as link.', 'kenzap-cta' ) }
                        />

                        { !attributes.action &&
                                
                            <CheckboxControl
                                label={ __( 'New tab', 'kenzap-cta' ) }
                                checked={ attributes.actionNew }
                                onChange={ ( actionNew ) => {
                                    setAttributes( {
                                        actionNew: actionNew,
                                    } );
                                } }
                                help={ __( 'Open link in new tab.', 'kenzap-cta' ) }
                            />
                        }

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
                                label: __( 'Icon', 'kenzap-cta' ),
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
                        className={ `kp-bn7 block-${ attributes.blockUniqId } ${ isSelected ? 'selected' : '' } ` }
                        attributes={ attributes }
                        withBackground
                        withPadding
                        >

                        <div class="kenzap-container" style={ kenzapContanerStyles }>
                            { attributes.nestedBlocks == 'top' && <InnerBlocks /> }
                            <div id="kp-modal" class="kp-modal">
                                <iframe width="560" height="315" src={ attributes.video } frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                <div class="kp-modc">
                                    <p>{ attributes.caption }</p>
                                </div>
                            </div>
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
                                    placeholder={ __( 'Title', 'kenzap-cta' ) }
                                    onChange={ ( caption ) => {
                                        setAttributes( { caption: caption } )
                                    } }
                                    style={ getTypography( attributes, 1 ) }
                                />

                                <div class="kpa">
                                    { attributes.action && <a href="#kp-modal" class="modal-link" rel="modal:open"><div class="kpim" ></div></a> }
                                    { !attributes.action && <a target={ attributes.actionNew?"_blank":"_self" } rel="noopener noreferrer" href={ attributes.video } ><div class="kpim" ></div></a> }
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
