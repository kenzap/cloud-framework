const { __ } = wp.i18n;
const { Component } = wp.element;
const { RichText, InspectorControls, PanelColorSettings, InnerBlocks } = wp.editor;
const { RangeControl, PanelBody, TextControl, TextareaControl } = wp.components;
import { getStyles, typographyArr } from './block';
import { InspectorContainer, ContainerEdit } from '../commonComponents/container/container';
import { TypographyContainer, getTypography } from '../commonComponents/typography/typography';
import { sanitizeAttr } from '../commonComponents/helpers/helpers';

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
                            label={ __( 'Gradient opacity mobile', 'kenzap-cta' ) }
                            value={ attributes.mopacity }
                            onChange={ ( mopacity ) => setAttributes( { mopacity } ) }
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
               
                        <TextareaControl
                            label={ __( 'Categories', 'kenzap-cta' ) }
                            value={ attributes.categories }
                            onChange={ ( categories ) => {
                                setAttributes( {
                                    categories: categories,
                                } );
                            } }
                            help={ __( 'Specify categories by comma. Ex.: Activities, Beverage etc. Leave blank to hide from banner', 'kenzap-cta' ) }
                        />

                        <TextControl
                            label={__( 'Action', 'kenzap-cta' )}
                            value={ attributes.action }
                            onChange={ ( action ) => setAttributes( { action } ) }
                            help={ __( 'Define search page after user hits button.', 'kenzap-cta' ) }
                        />

                        <TextControl
                            label={__( 'Button text', 'kenzap-cta' )}
                            value={ attributes.link }
                            onChange={ ( link ) => setAttributes( { link } ) }
                        />
                    </PanelBody>

                    <PanelColorSettings
                        title={ __( 'Colors', 'kenzap-cta' ) }
                        initialOpen={ false }
                        colorSettings={ [
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
                        className={ `kp-bn8 block-${ attributes.blockUniqId } ${ isSelected ? 'selected' : '' } ` }
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
                                    placeholder={ __( 'Title', 'kenzap-cta' ) }
                                    onChange={ ( caption ) => {
                                        setAttributes( { caption: caption } )
                                    } }
                                    style={ getTypography( attributes, 1 ) }
                                />

                                <div class="kpa">
                                    <form action = { attributes.action }>
                                        <div class="swrap" style={ {...getTypography( attributes, 2, "--cl" ),...getTypography( attributes, 2, "--hcl" )} }>
                                        { attributes.categories && <select style={ getTypography( attributes, 2 ) } name="q">
                                    
                                            { attributes.categories.split(",").map( ( item, index ) => (
                                                <option value={ encodeURIComponent(item.trim()) }>{ sanitizeAttr(item) }</option>
                                            )) }

                                        </select> }
                                        </div>
                                        <input type="submit" style={ getTypography( attributes, 3 ) } value={ sanitizeAttr(attributes.link) } />
                                    </form>
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
