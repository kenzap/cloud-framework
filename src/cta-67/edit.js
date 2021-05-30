const { __ } = wp.i18n;
const { Component } = wp.element;
const { RichText, InspectorControls, InnerBlocks } = wp.editor;
import { getStyles, typographyArr } from './block';
import { InspectorContainer, ContainerEdit } from '../commonComponents/container/container';
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
                    <TypographyContainer
                        setAttributes={ setAttributes }
                        typographyArr={ typographyArr }
                        { ...attributes }
                    />

                    <InspectorContainer
                        setAttributes={ setAttributes }
                        { ...attributes }
                        withNested
                        withPadding
                        withWidth100
                        withBackground
                        withAutoPadding
                    />
                </InspectorControls>
                <div id={ attributes.anchor } className={ className ? className : '' } style={ vars }>
                    <ContainerEdit
                        className={ `kpp-1 block-${ attributes.blockUniqId } ${ isSelected ? 'selected' : '' } ` }
                        attributes={ attributes }
                        withBackground
                        withPadding
                    >
                        <div className="kenzap-tcont" style={ {...kenzapContanerStyles, ...getTypography( attributes, 0, "text-align" ) } }>
                            { attributes.nestedBlocks == 'top' && <InnerBlocks /> }
                            <RichText
                                className="kp-h"
                                tagName={ "p" }
                                placeholder={ __( 'Type text..', 'kenzap-plugin' ) }
                                value={ attributes.title }
                                onChange={ ( value ) => setAttributes( { title: value } ) }
                                style={ getTypography( attributes, 0 ) }
                            />
                            { attributes.nestedBlocks == 'bottom' && <InnerBlocks /> }
                        </div>
                        
                    </ContainerEdit>
                </div>
            </div>
        );
    }
}
