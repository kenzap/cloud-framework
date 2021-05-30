const { __ } = wp.i18n;
const { Component } = wp.element;
const { RichText, InspectorControls, PanelColorSettings, InnerBlocks } = wp.editor;
const { RangeControl, PanelBody } = wp.components;

import { getStyles } from './block';
import { InspectorContainer, ContainerEdit } from '../commonComponents/container/container';

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
                            label={ __( 'Title size', 'kenzap-cta' ) }
                            value={ attributes.titleSize }
                            onChange={ ( titleSize ) => setAttributes( { titleSize } ) }
                            min={ 10 }
                            max={ 130 }
                            help={ __( 'Size is adjusted proportionally screen width.', 'kenzap-cta' ) }
                        />

                        <RangeControl
                            label={ __( 'Call to action size', 'kenzap-cta' ) }
                            value={ attributes.descriptionSize }
                            onChange={ ( descriptionSize ) => setAttributes( { descriptionSize } ) }
                            min={ 10 }
                            max={ 130 }
                            help={ __( 'Size is adjusted proportionally screen width.', 'kenzap-cta' ) }
                        />

                        <RangeControl
                            label={ __( 'Font weight', 'kenzap-cta' ) }
                            value={ attributes.textThickness }
                            onChange={ ( textThickness ) => setAttributes( { textThickness } ) }
                            min={ 1 }
                            max={ 8 }
                            help={ __( 'Actual font weight may vary depending on theme and font used.', 'kenzap-cta' ) }
                        />

                        <RangeControl
                            label={ __( 'Border radius', 'kenzap-cta' ) }
                            value={ attributes.borderRadius }
                            onChange={ ( borderRadius ) => setAttributes( { borderRadius } ) }
                            min={ 0 }
                            max={ 50 }
                            help={ __( 'Adjust border radius of CTA button and devider.', 'kenzap-cta' ) }
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
                                    label: __( 'Highlight 1', 'kenzap-cta' ),
                                },
                                {
                                    value: attributes.textColor2,
                                    onChange: ( value ) => {
                                        return setAttributes( { textColor2: value } );
                                    },
                                    label: __( 'Highlight 2', 'kenzap-cta' ),
                                }
                            ] }
                        />
                    </PanelBody>
                    
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
                        className={ `kpcta3 block-${ attributes.blockUniqId } ${ isSelected ? 'selected' : '' } ` }
                        attributes={ attributes }
                        withBackground
                        withPadding
                        >

                        <div className="kenzap-container" style={ kenzapContanerStyles }>
                            { attributes.nestedBlocks == 'top' && <InnerBlocks /> }
                            <div 
                                class="kp-content"
                                style={ { 
                                    outlineColor: attributes.backgroundColor,
                                } } >

                                <RichText
                                    tag="h4"
                                    className="kp-h4"
                                    value={ attributes.title }
                                    placeholder={ __( 'Title', 'kenzap-cta' ) }
                                    onChange={ ( title ) => setAttributes( { title } ) }
                                    />

                                <RichText
                                    tag="p"
                                    className="kp-p"
                                    value={ attributes.description }
                                    placeholder={ __( 'Call to action text', 'kenzap-cta' ) }
                                    onChange={ ( description ) => setAttributes( { description } ) }
                                    />

                            </div>
                            { attributes.nestedBlocks == 'bottom' && <InnerBlocks /> }
                        </div>
                    </ContainerEdit>
                </div>
            </div>
        );
    }
}
