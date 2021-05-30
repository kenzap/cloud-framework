import './style.scss';
import './editor.scss';

const { __ } = wp.i18n;
const { RichText, InnerBlocks } = wp.editor;
const { registerBlockType } = wp.blocks;
import { blockProps, ContainerSave } from '../commonComponents/container/container';
import { getTypography } from '../commonComponents/typography/typography';
import Edit from './edit';

/**
 * Define typography defaults
 */
export const typographyArr = JSON.stringify([
    {
        'title': __( '- Tab', 'kenzap-plugin' ),
        'type': 'button',
        'font-size': 23,
        'font-weight': 6,
        'line-height': 29,
        'padding-right': 10,
        'padding-bottom': 20,
        'padding-left': 10,
        'margin-bottom': 20,
        'color': '#23282d',
    },
    {
        'title': __( '- Title', 'kenzap-plugin' ),
        'type': 'title',
        'font-size': 64,
        'font-size-t': 40,
        'font-size-m': 40,
        'font-weight': 6,
        'line-height': 66,
        'margin-top': 20,
        'margin-bottom': 20,
        'color': '#23282d',
    },
    {
        'title': __( '- Text', 'kenzap-plugin' ),
        'font-size': 16,
        'font-weight': 4,
        'line-height': 28,
        'margin-bottom': 20,
        'color': '#535353',
    },
    {
        'title': __( '- Button', 'kenzap-plugin' ),
        'type': 'button',
        'font-size': 16,
        'font-weight': 4,
        'border-width': 1,
        'line-height': 30,
        'padding-top': 12,
        'padding-right': 48,
        'padding-bottom': 12,
        'padding-left': 48,
        'border-radius': 4,
        'color': '#007cba',
        'background-color': '#ffffff',
        'hover-color': '#ffffff',
        'hover-background-color': '#007cba',
        'hover-border-color': '#007cba'
    },
]);

export const defaultItems = JSON.stringify( [
    {
        tab: __( 'Tab 2', 'kenzap-plugin' ),
        title: __( 'Title', 'kenzap-plugin' ),
        text: __( 'Maecenas euismod auctor pretium. Vestibulum varius sagittis convallis. Morbi nisl orci, eleifend sed metus in, condimentum congue ligula. Suspendisse aliquet fringilla libero ac suscipit. Praesent porttitor sodales justo, nec sagittis odio congue id <br><br> In nec leo a felis volutpat mollis. Vestibulum tellus lacus, vulputate ut elit et, sagittis porta diam. Sed feugiat mauris rhoncus, ultrices ligula a, placerat elit. Proin nec enim justo. Donec vitae convallis ante, eget tempus augue. Vivamus eget libero interdum, aliquam est sed', 'kenzap-plugin' ),
        btn: __( 'Read More', 'kenzap-plugin' ),
        layout: 'left',
        link: '#',
        linkTarget: false,
        img: (window.kenzap_cta_path + "images/cta-img-1.jpg"),
        aspect: 1.9285,
        key: new Date().getTime() + 1,
    },
    {
        tab: __( 'Tab 2', 'kenzap-plugin' ),
        title: __( 'Title', 'kenzap-plugin' ),
        text: __( 'Maecenas euismod auctor pretium. Vestibulum varius sagittis convallis.', 'kenzap-plugin' ),
        btn: __( 'Read More', 'kenzap-plugin' ),
        layout: 'right',
        link: '#',
        linkTarget: false,
        img: (window.kenzap_cta_path + "images/cta-img-1.jpg"),
        aspect: 0.7941,
        key: new Date().getTime() + 2,
    },
] );

export const attrs = {
        ...blockProps,

        align: {
            type: 'string',
            default: 'wide',
        },

        items: {
            type: 'array',
            default: [],
        },

        elements: {
            type: 'number',
            default: 3,
        },

        tabStyle: {
            type: 'string',
            default: 'classic',
        },

        tabScroll: {
            type: 'string',
            default: 'no',
        },

        highlight: {
            type: 'string',
            default: '#007cba',
        },

        textColor: {
            type: 'string',
            default: '#fff',
        },

        textColor2: {
            type: 'string',
            default: '#23282d',
        },

        isFirstLoad: {
            type: 'boolean',
            default: true,
        },

        blockUniqId: {
            type: 'number',
            default: 0,
        },

        typography: {
            type: 'array',
            default: [],
        },

        preview: {
            type: 'boolean',
            default: false,
        },
    };

/**
 * Generate inline styles for custom settings of the block
 * @param {Object} attributes - of the block
 * @returns {Node} generated styles
 */
export const getStyles = attributes => {
    const kenzapContanerStyles = {
        maxWidth: `${ attributes.containerMaxWidth === '100%' ? '100%' : attributes.containerMaxWidth + 'px' }`,
        '--maxWidth': `${ attributes.containerMaxWidth === '100%' ? '100wh' : attributes.containerMaxWidth + ' ' } `,
    };

    const vars = {
        '--paddings': `${ attributes.containerPadding }`,
        '--paddings2': `${ attributes.containerSidePadding }px`,
    };

    return {
        vars,
        kenzapContanerStyles,
    };
};

/**
 * Calculate cart icon aspect ratio.
 * CSS image masks needs width and height. Auto does not work. In order not to use 2 RangeControls use this method.
 *
 * The "edit" property must be a valid function.
 * @param {Object} tab - tab
 * @param {Integer} index - index of items array
 */
export const onTabClick = ({target:tab}, index) => {

    jQuery(tab).parent().parent().find('li').removeClass('active');
    jQuery(tab).parent().addClass('active');
    jQuery(tab).parent().parent().parent().parent().parent().find('.tab-content').hide();
 
    var activeTab = jQuery(tab).attr('href');
    jQuery(activeTab).fadeIn();

    return false;
}


const getTabContent = (attributes, i) => {

    return (<div class="kp-content">

        { attributes.items && attributes.items.map( ( item, index ) => (

        <div id={ `content-${ index }` } class="tab-content" style={ { display: (`${ index == 0 ? 'block':'none' }`) } }>
            <div class="kenzap-row">

                { item.layout == 'left' ?
                <div class="kenzap-col-6">
                    <img src={ item.img } alt="image" onClick={ () => { this.setState( { popupVisibleIndex: index } ); } } />
                </div> 
                : null }

                <div class="kenzap-col-6" >
                    <RichText.Content
                        tagName="h2"
                        className="kph"
                        value={ item.title }
                        //onClick={ ( e ) => onTabClick(e, index) }
                        // placeholder={ __( 'Title', 'kenzap-cta' ) }
                        // onChange={ ( value ) => {
                        //      this.onChangePropertyItem( 'title', value, index, true ); //setAttributes( { title: title } ) 
                        // } }
                        style={ getTypography( attributes, 1 ) }
                    />

                    <RichText.Content
                        tagName="p"
                        className="kpp"
                        value={ item.text }
                        // placeholder={ __( 'Text', 'kenzap-cta' ) }
                        // onChange={ ( value ) => {
                        //      this.onChangePropertyItem( 'text', value, index, true ); //setAttributes( { title: title } ) 
                        // } }
                        style={ getTypography( attributes, 2 ) }
                    />

                    <a class="read-more" target={ item.linkTarget ? '_blank':'_self' } rel="noopener noreferrer" href={ item.link } style={ getTypography( attributes, 3 ) } onClick={ () => { this.setState( { popupVisibleIndex: index } ); } }>{ item.btn }</a>
                    
                </div>

                { item.layout == 'right' ?
                <div class="kenzap-col-6">
                    <img src={ item.img } alt="image" onClick={ () => { this.setState( { popupVisibleIndex: index } ); } } />
                </div>
                : null }

            </div>   
        </div>
        
    ) ) }
    
    </div> );
}

/**
 * Register: a Gutenberg Block.
 *
 * Registers a new block provided a unique name and an object defining its
 * behavior. Once registered, the block is made editor as an option to any
 * editor interface where blocks are implemented.
 *
 * @link https://wordpress.org/gutenberg/handbook/block-api/
 * @param  {string}   name     Block name.
 * @param  {Object}   settings Block settings.
 * @return {?WPBlock}          The block, if it has been successfully
 *                             registered; otherwise `undefined`.
 */
registerBlockType( 'kenzap/cta-25', {
    title: __( 'Vertical & Horizontal Tabs', 'kenzap-cta' ),
    icon: 'migrate',
    category: 'layout',
    keywords: [
        __( 'kenzap cta 25', 'kenzap-cta' ),
        __( 'tabs, faq', 'kenzap-cta' ),
        __( 'buttons', 'kenzap-cta' ),
    ],
    html: true,
    supports: {
        align: [ 'full', 'wide' ],
        anchor: true,
    },
    attributes: attrs,
    example: { attributes: { preview: true } },
    /**
     * The edit function describes the structure of your block in the context of the editor.
     * This represents what the editor will render when the block is used.
     *
     * The "edit" property must be a valid function.
     *
     * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
     */
    edit: ( props ) => {

        if ( props.attributes.preview ) return ( <img src={ `${ window.kenzap_cta_path + 'cta-25/preview.jpeg' }` } /> );

        if ( props.attributes.items.length === 0 && props.attributes.isFirstLoad ) {
            props.setAttributes( {
                items: [ ...JSON.parse( defaultItems ) ],
                isFirstLoad: false,
            } );

            props.attributes.items = JSON.parse( defaultItems );
        }

        return ( <Edit { ...props } /> );
    },

    /**
     * The save function defines the way in which the different attributes should be combined
     * into the final markup, which is then serialized by Gutenberg into post_content.
     *
     * The "save" property must be specified and must be a valid function.
     * @param {Object} props - attributes
     * @returns {Node} rendered component
     */ 
    save: function( props ) {

        const {
            className,
            attributes,
        } = props;

        const { vars, kenzapContanerStyles } = getStyles( props.attributes );

        return (
            <div id={ attributes.anchor } className={ className ? className : '' } style={ vars }>
                <ContainerSave
                    className={ `kp-tabs-1 ${ attributes.tabStyle == "vertical" ? "kpv":"" }` }
                    attributes={ attributes }
                    style={ vars }
                    withBackground
                    withPadding
                    >
                    <div class="kenzap-container" style={ kenzapContanerStyles }>
                        { attributes.nestedBlocks == 'top' && <InnerBlocks.Content /> }
                        <div class={ `kp-nav ${ attributes.tabStyle == "button" ? "kp-button":"" }` }>
                            <div class="kp-nav-inner" >
                                <ul class="nav-tabs">
                                
                                    { attributes.items && attributes.items.map( ( item, index ) => (
                                    <li data-index={index} className={ `${ index == 0 ? 'kptab active':'kptab' }` } style={ {...getTypography( attributes, 0, 'color' ), ...getTypography( attributes, 0, '--hcl' ), ...getTypography( attributes, 0, '--hbacl' ), ...{'--hbrcl': attributes.highlight}} }>
                                        <a href={ `#content-${ index }` } style={ getTypography( attributes, 0 ) }>{ item.tab }</a>
                                    </li>
                                    ) ) }

                                </ul>
                            </div>
                        </div>
                        { getTabContent(attributes, 0) }
                        { attributes.nestedBlocks == 'bottom' && <InnerBlocks.Content /> }
                    </div>
                </ContainerSave>
            </div>
        );
    },
} );
