const { __ } = wp.i18n; 
const { serverSideRender: ServerSideRender } = wp;
const { Component } = wp.element;
const { InspectorControls, PanelColorSettings } = wp.editor;
const { PanelBody, TextControl, CheckboxControl } = wp.components;
import { typographyArr } from './block';
import { InspectorContainer } from '../commonComponents/container/container';
import { TypographyContainer, getTypography, getTypographyInline } from '../commonComponents/typography/typography';

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

        setAttributes({ t0: getTypographyInline( attributes, 0 )});
        setAttributes({ t1: getTypographyInline( attributes, 1 )});

        return (
            <div className={ className }>
                <InspectorControls
                    setAttributes={ setAttributes }
                    { ...attributes }
                >
                    <PanelBody
                        title={ __( 'General', 'kenzap-subscriptions' ) }
                        initialOpen={ false }
                    >
                        <TextControl
                            label={__( 'Form ID', 'kenzap-subscriptions' )}
                            value={ attributes.link }
                            onChange={ ( link ) => setAttributes( { link } ) }
                            help={ __( 'Go to Mailchimp > Forms section of your admin and copy form ID here. Ex.: 11705', 'kenzap-subscriptions' ) }
                        />

                        <TextControl
                            label={__( 'Title', 'kenzap-subscriptions' )}
                            value={ attributes.title }
                            onChange={ ( title ) => setAttributes( { title } ) }
                        />

                        <TextControl
                            label={__( 'Terms', 'kenzap-subscriptions' )}
                            value={ attributes.terms }
                            onChange={ ( terms ) => setAttributes( { terms } ) }
                        />

                        <CheckboxControl
                            label={ __( 'Inverse button', 'kenzap-cta' ) }
                            checked={ attributes.btnInv }
                            onChange={ ( btnInv ) => setAttributes( { btnInv } ) }
                        />

                        <CheckboxControl
                            label={ __( 'Round corners', 'kenzap-cta' ) }
                            checked={ attributes.btnRound }
                            onChange={ ( btnRound ) => setAttributes( { btnRound } ) }
                        />

                        <PanelColorSettings
                            title={ __( 'Colors', 'kenzap-subscriptions' ) }
                            initialOpen={ false }
                            colorSettings={ [
                                {
                                    value: attributes.textColor,
                                    onChange: ( value ) => {
                                        return setAttributes( { textColor: value } );
                                    },
                                    label: __( 'Text', 'kenzap-subscriptions' ),
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
                    />
                </InspectorControls>

                <ServerSideRender
                    block="kenzap/cta-65"
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
                        autoPadding: attributes.autoPadding,
                        uniqueID: attributes.uniqueID,
                        //block        
                        align: attributes.align,
                        checkSidebar: false,
                        link: attributes.link,
                        btnInv: attributes.btnInv,
                        btnRound: attributes.btnRound,
                        title: attributes.title,
                        titleSize: attributes.titleSize,
                        fontWeight: attributes.fontWeight,
                        textColor: attributes.textColor,
                        terms: attributes.terms,
                        borderRadius: attributes.borderRadius,
                        t0: attributes.t0,
                        t1: attributes.t1,
                        t2: attributes.t2,
                        t3: attributes.t3,
                        t4: attributes.t4,
                        serverSide: true,
                    } }
                />

            </div>
        );
    }
}
