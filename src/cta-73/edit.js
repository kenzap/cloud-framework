
const { __ } = wp.i18n;
const { Component } = wp.element;
const { InspectorControls, PanelColorSettings } = wp.editor;
const { RangeControl, CheckboxControl, ToggleControl, RadioControl, PanelBody, SelectControl, TextControl } = wp.components;
const { serverSideRender: ServerSideRender } = wp;
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
        } = this.props;

        setAttributes({ t0: getTypographyInline( attributes, 0 )});
        setAttributes({ t1: getTypographyInline( attributes, 1 )});
        setAttributes({ t2: getTypographyInline( attributes, 2 )});

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
                            label={ __( 'Hide sticky posts', 'kenzap-blog' ) }
                            checked={ attributes.ignoreSticky}
                            onChange={ (ignoreSticky) => setAttributes( { ignoreSticky } ) }
                        />
                        
                        <ToggleControl
                            label={ __( 'Show category', 'kenzap-blog' ) }
                            checked={ attributes.showCategory}
                            onChange={ (showCategory) => setAttributes( { showCategory } ) }
                        />

                        <ToggleControl
                            label={ __( 'Show date', 'kenzap-blog' ) }
                            checked={ attributes.showDate}
                            onChange={ (showDate) => setAttributes( { showDate } ) }
                        />

                        <ToggleControl
                            label={ __( 'Show comments', 'kenzap-blog' ) }
                            checked={ attributes.showComments}
                            onChange={ (showComments) => setAttributes( { showComments } ) }
                        />

                        <ToggleControl
                            label={ __( 'Show tags', 'kenzap-blog' ) }
                            checked={ attributes.showTags}
                            onChange={ (showTags) => setAttributes( { showTags } ) }
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

                        <PanelColorSettings
                            title={ __( 'Highlight color', 'kenzap-blog' ) }
                            initialOpen={ false }
                            colorSettings={ [
                                    {
                                        value: attributes.mainColor,
                                        onChange: ( value ) => {
                                            return setAttributes( { mainColor: value } );
                                        },
                                        label: __( 'Selected', 'kenzap-blog' ),
                                    },
                                ] }
                            help={ __( 'Color of pagination and other small details.', 'kenzap-blog' ) }
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
                    block="kenzap/cta-73"
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
                        ignoreNoImage: attributes.ignoreNoImage,
                        ignoreSticky: attributes.ignoreSticky,
                        showCategory: attributes.showCategory,
                        showComments: attributes.showComments,
                        showTags: attributes.showTags,
                        showDate: attributes.showDate,
                        category: attributes.category,
                        per_page: attributes.per_page, 
                        mainColor: attributes.mainColor,  
                        orderby: attributes.orderby,  
                        pagination: attributes.pagination,  
                        t0: attributes.t0,
                        t1: attributes.t1,
                        t2: attributes.t2,
                        t3: attributes.t3,
                        serverSide: true,
                    } }
                />
            </div>
        );
    }
}
