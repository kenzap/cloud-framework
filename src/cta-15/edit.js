const { __ } = wp.i18n;
const { Component } = wp.element;
const { RichText, InspectorControls, PanelColorSettings, InnerBlocks } = wp.editor;
const { RangeControl, PanelBody } = wp.components;
import { getStyles } from './block';
import { InspectorContainer, ContainerEdit, uo } from '../commonComponents/container/container';

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
                            max={ 250 }
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
                                    value: attributes.textColor2,
                                    onChange: ( value ) => {
                                        return setAttributes( { textColor2: value } );
                                    },
                                    label: __( 'Text bold', 'kenzap-cta' ),
                                },
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
                    
                <div id={ attributes.anchor } className={ className ? className : '' } style={ vars } >
                    <ContainerEdit
                        className={ `kpinf13 block-${ attributes.blockUniqId } ${ isSelected ? 'selected' : '' } ` }
                        attributes={ attributes }
                        withBackground
                        withPadding
                        >
 
                        <div className="kenzap-container" style={ kenzapContanerStyles }>
                            { attributes.nestedBlocks == 'top' && <InnerBlocks /> }
                            <div class="info-box">
                                <div class="kp-content">

                                    <RichText
                                        tagName="p"
                                        className="marquee2 kp-p"
                                        data-duration="50000"
                                        placeholder={ __( 'Moving text', 'kenzap-cta' ) }
                                        value={ attributes.title }
                                        onChange={ ( title ) => setAttributes( { title } ) }
                                        />

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
