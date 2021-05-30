const { __ } = wp.i18n;
const { Component } = wp.element;
const { InspectorControls, PanelColorSettings } = wp.editor;
const { RangeControl, PanelBody, RadioControl, ToggleControl, CheckboxControl, TextControl } = wp.components;
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
        setAttributes({ t2: getTypographyInline( attributes, 2 )});
        setAttributes({ t3: getTypographyInline( attributes, 3 )});

        return (
            <div>
                <InspectorControls>
                    <PanelBody
                        title={ __( 'General', 'kenzap-blog' ) }
                        initialOpen={ false }
                    >

                        <RangeControl
                            label={ __( 'Records per page', 'kenzap-blog' ) }
                            value={ attributes.per_page }
                            onChange={ ( value ) => setAttributes( { per_page: value } ) }
                            min={ 1 }
                            max={ 50 }
                            help={ __( 'Specify the maximum number of posts to display per page.', 'kenzap-blog' ) }
                        />
                                             
                        <ToggleControl
                            label={ __( 'Show sticky posts', 'kenzap-blog' ) }
                            checked={ attributes.showSticky}
                            onChange={ (showSticky) => setAttributes( { showSticky } ) }
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
                            label={ __( 'Show author', 'kenzap-blog' ) }
                            checked={ attributes.showTags}
                            onChange={ (showTags) => setAttributes( { showTags } ) }
                        />

                        <RadioControl
                            label={ __( 'Alignment', 'kenzap-blog' ) }
                            selected={ attributes.txAlign }
                            options={ [
                                { label: __( 'Left', 'kenzap-blog' ), value: 'left' },
                                { label: __( 'Center', 'kenzap-blog' ), value: 'center' },
                                { label: __( 'Right', 'kenzap-blog' ), value: 'right' },
                            ] }
                            onChange={ ( txAlign ) => { setAttributes( { txAlign } ) } }
                        />

                        <CheckboxControl
                            label={ __( 'Show excerpt', 'kenzap-blog' ) }
                            checked={ attributes.showExcerpt}
                            onChange={ (showExcerpt) => setAttributes( { showExcerpt } ) }
                        />

                        <TextControl
                            label={ __( 'Restrict by post type', 'kenzap-blog' ) }
                            value={ attributes.postType }
                            onChange={ ( postType ) => { setAttributes( { postType } ); } }
                            help={ __( 'By default search is global but you can restrict it to certain post type only. Example: page, post..', 'kenzap-blog' ) }
                        />

                        <TextControl
                            label={ __( 'Search text', 'kenzap-blog' ) }
                            value={ attributes.searchText }
                            onChange={ ( searchText ) => { setAttributes( { searchText } ); } }
                        />

                        <TextControl
                            label={ __( 'Result text', 'kenzap-blog' ) }
                            value={ attributes.searchText2 }
                            onChange={ ( searchText2 ) => { setAttributes( { searchText2 } ); } }
                        />

                        <CheckboxControl
                            label={ __( 'Pagination', 'kenzap-blog' ) }
                            checked={ attributes.pagination}
                            onChange={ (pagination) => setAttributes( { pagination } ) }
                            help={ __( 'Preview on frontend only.', 'kenzap-blog' ) }
                        />

                        <PanelColorSettings
                            title={ __( 'Colors', 'kenzap-blog' ) }
                            initialOpen={ false }
                            colorSettings={ [
                                {
                                    value: attributes.textColor,
                                    onChange: ( value ) => {
                                        return setAttributes( { textColor: value } );
                                    },
                                    label: __( 'Highlight', 'kenzap-blog' ),
                                },
                                {
                                    value: attributes.textColor2,
                                    onChange: ( value ) => {
                                        return setAttributes( { textColor2: value } );
                                    },
                                    label: __( 'Button text', 'kenzap-blog' ),
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
                    block="kenzap/cta-76"
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
                        checkSidebar: false,
                        serverSide: true,
                        boxed: attributes.boxed,
                        link: attributes.link,
                        borderRadius: attributes.borderRadius,
                        fontWeight: attributes.fontWeight,
                        textColor: attributes.textColor,
                        textColor2: attributes.textColor2,
                        txAlign: attributes.txAlign,
                        per_page: attributes.per_page, 
                        showSticky: attributes.showSticky,
                        showCategory: attributes.showCategory,
                        showComments: attributes.showComments,
                        showTags: attributes.showTags,
                        postType: attributes.postType,
                        showDate: attributes.showDate,
                        showExcerpt: attributes.showExcerpt,
                        pagination: attributes.pagination,  
                        searchText: attributes.searchText,  
                        searchText2: attributes.searchText2,  
                        className: this.props.className,
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
