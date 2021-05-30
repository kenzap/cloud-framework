const { __ } = wp.i18n; 
const { serverSideRender: ServerSideRender } = wp;
const { Component } = wp.element;
const { InspectorControls, PanelColorSettings } = wp.editor;
const { RangeControl, PanelBody, TextControl } = wp.components;
import { getStyles, typographyArr } from './block';
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

    /**
     * Change any property of item
     * @param {string} property - editable field
     * @param {string} value - for field
     * @param {number} index - of items array
     * @param {boolean} withMutation - in some cases we should avoid mutation for force rerender component
     */
    onChangePropertyItem = ( property, value, index, withMutation = false ) => {
        const items = withMutation ? [ ...this.props.attributes.items ] : this.props.attributes.items;
        if ( ! items[ index ] || typeof items[ index ][ property ] !== 'string' ) {
            return;
        }
        items[ index ][ property ] = value;
        this.props.setAttributes( { items: items } );
    };

    render() {
        const {
            className,
            attributes,
            setAttributes,
        } = this.props;
        
        setAttributes({ t0: getTypographyInline( attributes, 0 )});
        setAttributes({ t1: getTypographyInline( attributes, 1 )});

        return (
            <div>
                <InspectorControls>
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

                        <RangeControl
                            label={ __( 'Title size', 'kenzap-subscriptions' ) }
                            value={ attributes.titleSize }
                            onChange={ ( titleSize ) => setAttributes( { titleSize } ) }
                            min={ 10 }
                            max={ 130 }
                        />

                        <RangeControl
                            label={ __( 'Font weight', 'kenzap-subscriptions' ) }
                            value={ attributes.fontWeight }
                            onChange={ ( fontWeight ) => setAttributes( { fontWeight } ) }
                            min={ 1 }
                            max={ 8 }
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
                                    label: __( 'Form', 'kenzap-subscriptions' ),
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
                    block="kenzap/cta-64"
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
                        uniqueID: attributes.uniqueID,
                        //block        
                        align: attributes.align,
                        checkSidebar: false,
                        serverSide: true,
                        link: attributes.link,
                        title: attributes.title,
                        textColor: attributes.textColor,
                        terms: attributes.terms,
                        borderRadius: attributes.borderRadius,
                        t0: attributes.t0,
                        t1: attributes.t1,
                        t2: attributes.t2,
                        t3: attributes.t3,
                        t4: attributes.t4,
                    } }
                />

            </div>
        );
    }
}
