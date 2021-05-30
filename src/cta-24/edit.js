const { __ } = wp.i18n;
const { Component } = wp.element;
const { InspectorControls } = wp.editor;
const { PanelBody, TextControl, CheckboxControl } = wp.components;
const { serverSideRender: ServerSideRender } = wp;
import { typographyArr } from './block';
import { InspectorContainer } from '../commonComponents/container/container';
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

    getTypographyVars = (attributes, i) => {
        var t = getTypography( attributes, i );
        var to = "";
        if(t) Object.keys(t).forEach(function (item, key) { to += ("--t"+i+item.replace(/[-\/\\^$*+?.()|[\]{}]/g, '')+":"+t[item]+";"); });
        return to;
    }

    render() {
        const {
            className,
            attributes,
            setAttributes,
            isSelected,
        } = this.props;

        setAttributes({ t0: this.getTypographyVars(attributes, 0)});
        setAttributes({ t1: this.getTypographyVars(attributes, 1)});

        return (
            <div>
                <InspectorControls>
                    <PanelBody
                        title={ __( 'General', 'kenzap-cta' ) }
                        initialOpen={ false }
                    >
                        <TextControl
                            label={__( 'Form ID', 'kenzap-cta' )}
                            value={ attributes.link }
                            onChange={ ( link ) => setAttributes( { link } ) }
                            help={ __( 'Go to Ninja Forms > Dashboard > Add New in order to creatre your new form and paste its ID here. Ex.: 11705', 'kenzap-cta' ) }
                        />

                        {/* <RangeControl
                            label={ __( 'Font weight', 'kenzap-cta' ) }
                            value={ attributes.fontWeight }
                            onChange={ ( fontWeight ) => setAttributes( { fontWeight } ) }
                            min={ 1 }
                            max={ 8 }
                        />

                        <RangeControl
                            label={ __( 'Border radius', 'kenzap-cta' ) }
                            value={ attributes.borderRadius }
                            onChange={ ( borderRadius ) => setAttributes( { borderRadius } ) }
                            min={ 0 }
                            max={ 50 }
                        /> */}

                        <CheckboxControl
                            label={ __( 'Boxed', 'kenzap-cta' ) }
                            checked={ attributes.boxed }
                            onChange={ ( boxed ) => {
                                setAttributes( {
                                    boxed: boxed,
                                } );
                            } }
                        />

                        {/* <PanelColorSettings
                            title={ __( 'Colors', 'kenzap-cta' ) }
                            initialOpen={ false }
                            colorSettings={ [
                                {
                                    value: attributes.textColor,
                                    onChange: ( value ) => {
                                        return setAttributes( { textColor: value } );
                                    },
                                    label: __( 'Button', 'kenzap-cta' ),
                                },
                                {
                                    value: attributes.textColor2,
                                    onChange: ( value ) => {
                                        return setAttributes( { textColor2: value } );
                                    },
                                    label: __( 'Button text', 'kenzap-cta' ),
                                },
                            ] }
                        /> */}

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

                <ServerSideRender
                    block="kenzap/cta-24"
                    attributes={ {
                        // container
                        containerMaxWidth: attributes.containerMaxWidth,
                        containerPadding: attributes.containerPadding,
                        containerSidePadding: attributes.containerSidePadding,
                        backgroundColor: attributes.backgroundColor,
                        backgroundImage: attributes.backgroundImage,
                        backgroundStyle: attributes.backgroundStyle,
                        backgroundPosition: attributes.backgroundPosition,
                        parallax: attributes.parallax,
                        //block   
                        align: attributes.align,
                        checkSidebar: false,
                        serverSide: true,
                        boxed: attributes.boxed,
                        btnInv: attributes.btnInv,
                        link: attributes.link,
                        borderRadius: attributes.borderRadius,
                        fontWeight: attributes.fontWeight,
                        textColor: attributes.textColor,
                        textColor2: attributes.textColor2,
                        className: this.props.className,
                        t0: attributes.t0,
                        t1: attributes.t1,
                    } }
                />

            </div>
        );
    }
}
