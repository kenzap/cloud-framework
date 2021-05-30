const { __ } = wp.i18n;
const { Component } = wp.element;
const { InspectorControls, PanelColorSettings } = wp.editor;
const { RangeControl, CheckboxControl, ToggleControl, RadioControl, PanelBody, SelectControl, TextControl } = wp.components;
const { serverSideRender: ServerSideRender } = wp;
import { typographyArr } from './block';
import { InspectorContainer } from '../commonComponents/container/container';
import { TypographyContainer, getTypographyInline } from '../commonComponents/typography/typography';

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
                        title={ __( 'General', 'kenzap-blog' ) }
                        initialOpen={ false }
                    >

                        <TextControl
                            label={ __( 'Category', 'kenzap-blog' ) }
                            value={ attributes.category }
                            onChange={ ( category ) => setAttributes( { category } ) }
                            help={ __( 'Restrict posts by category. To view categories go to Posts > Categories section.', 'kenzap-blog' ) }
                        />

                        <RadioControl
                            label={ __( 'Image style', 'kenzap-blog' ) }
                            selected={ attributes.displayType }
                            options={ [
                                { label: __( 'Horizontal', 'kenzap-blog' ), value: 'kp-horizontal' },
                                { label: __( 'Square', 'kenzap-blog' ), value: 'kp-square' },
                                { label: __( 'Vertical', 'kenzap-blog' ), value: 'kp-vertical' },
                            ] }
                            onChange={ ( displayType ) => {
                                setAttributes( { displayType } );
                            } }
                        />

                        <ToggleControl
                            label={ __( 'Hide posts with no image', 'kenzap-blog' ) }
                            checked={ attributes.ignoreNoImage}
                            onChange={ (ignoreNoImage) => setAttributes( { ignoreNoImage } ) }
                        />

                        <ToggleControl
                            label={ __( 'Show sticky posts', 'kenzap-blog' ) }
                            checked={ attributes.showSticky}
                            onChange={ (showSticky) => setAttributes( { showSticky } ) }
                        />

                        <ToggleControl
                            label={ __( 'Show link', 'kenzap-blog' ) }
                            checked={ attributes.showDate}
                            onChange={ (showDate) => setAttributes( { showDate } ) }
                        />

                        <SelectControl
                            label={ __( 'Order by', 'kenzap-blog' ) }
                            value={ attributes.orderby }
                            options={ [
                                { label: __( 'Newest to Oldest', 'kenzap-blog' ), value: 'date/desc' },
                                { label: __( 'Oldest to Newest', 'kenzap-blog' ), value: 'date/asc' },
                                { label: __( 'A → Z', 'kenzap-blog' ), value: 'title/asc' },
                                { label: __( 'Z → A', 'kenzap-blog' ), value: 'title/desc' },
                            ] }
                            onChange={ ( orderby ) => {
                                setAttributes( { orderby } );
                            } }
                        />

                        <TextControl
                            label={ __( 'Link text', 'kenzap-blog' ) }
                            value={ attributes.linkText }
                            onChange={ ( linkText ) => setAttributes( { linkText } ) }
                        />

                        <RangeControl
                            label={ __( 'Records per page', 'kenzap-blog' ) }
                            value={ attributes.per_page }
                            onChange={ ( value ) => setAttributes( { per_page: value } ) }
                            min={ 1 }
                            max={ 50 }
                            help={ __( 'Specify the maximum number of posts to display per page.', 'kenzap-blog' ) }
                        />
                     
                        <CheckboxControl
                            label={ __( 'Pagination', 'kenzap-blog' ) }
                            checked={ attributes.pagination}
                            onChange={ (pagination) => setAttributes( { pagination } ) }
                            help={ __( 'Preview on frontend only.', 'kenzap-blog' ) }
                        />

                    </PanelBody>
                    
                    <PanelColorSettings
                            title={ __( 'Colors', 'kenzap-blog' ) }
                            initialOpen={ false }
                            colorSettings={ [
                                    {
                                        value: attributes.textColor,
                                        onChange: ( value ) => {
                                            return setAttributes( { textColor: value } );
                                        },
                                        label: __( 'Text', 'kenzap-blog' ),
                                    },    
                                    {
                                        value: attributes.textColor2,
                                        onChange: ( value ) => {
                                            return setAttributes( { textColor2: value } );
                                        },
                                        label: __( 'Pagination numbers', 'kenzap-blog' ),
                                    },    
                                    {
                                        value: attributes.mainColor,
                                        onChange: ( value ) => {
                                            return setAttributes( { mainColor: value } );
                                        },
                                        label: __( 'Highlight', 'kenzap-blog' ),
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
                    />
                </InspectorControls>

                <ServerSideRender
                    block="kenzap/cta-75"
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
                        //block                            
                        align: attributes.align,         
                        displayType: attributes.displayType,
                        columns: attributes.columns,
                        showSticky: attributes.showSticky,
                        ignoreNoImage: attributes.ignoreNoImage,
                        showCategory: attributes.showCategory,
                        linkText: attributes.linkText,
                        showDate: attributes.showDate,
                        category: attributes.category,
                        per_page: attributes.per_page, 
                        mainColor: attributes.mainColor,  
                        textColor: attributes.textColor,  
                        textColor2: attributes.textColor2,  
                        orderby: attributes.orderby,  
                        pagination: attributes.pagination,  
                        t0: attributes.t0,
                        t1: attributes.t1,
                        t2: attributes.t2,
                        serverSide: true,
                    } }
                />
            </div>
        );
    }
}
