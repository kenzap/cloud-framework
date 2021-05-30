import './style.scss';
import './editor.scss';

const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { RichText, InnerBlocks } = wp.editor;
import { blockProps, ContainerSave, uo } from '../commonComponents/container/container';
import { getTypography } from '../commonComponents/typography/typography';
import Edit from './edit';

/**
 * Provides the initial data for new block
 */
export const defaultItem = {
    title: __( 'Designing Dreams', 'kenzap-gallery' ),
    iconMediaId: '',
    icon: (window.kenzap_cta_path + 'images/gallery-img-1.jpg'),
    iconF: (window.kenzap_cta_path + 'images/gallery-img-1.jpg'),
    categories: [
        'filter1',
        'filter2',
        'filter3',
    ],
    action: 'enlarge',
    link: '',
    linkTarget: false,
};

export const defaultSubBlocks = JSON.stringify( [
    {
        title: __( 'Designing Dreams', 'kenzap-gallery' ),
        description: 'Art / Green / Red',
        iconMediaId: '',
        icon: (window.kenzap_cta_path + 'images/gallery-img-1.jpg'),
        iconF: (window.kenzap_cta_path + 'images/gallery-img-1.jpg'),
        categories: [
            'filter1',
            'filter2',
        ],
        action: 'enlarge',
        link: '',
        linkTarget: false,
        key: new Date().getTime() + 1,
    }, {
        title: __( 'Inspiration', 'kenzap-gallery' ),
        description:  __( 'Art / Green / Red', 'kenzap-gallery' ),
        iconMediaId: '',
        icon: (window.kenzap_cta_path + 'images/gallery-img-2.jpg'),
        iconF: (window.kenzap_cta_path + 'images/gallery-img-2.jpg'),
        categories: [
            'filter2',
            'filter3',
        ],
        action: 'enlarge',
        link: '',
        linkTarget: false,
        key: new Date().getTime() + 2,
    }, {
        title: __( 'Creative Influence', 'kenzap-gallery' ),
        description:  __( 'Art / Green / Red', 'kenzap-gallery' ),
        iconMediaId: '',
        icon: (window.kenzap_cta_path + 'images/gallery-img-3.jpg'),
        iconF: (window.kenzap_cta_path + 'images/gallery-img-3.jpg'),
        categories: [
            'filter1',
            'filter2',
            'filter3',
        ],
        action: 'enlarge',
        link: '',
        linkTarget: false,
        key: new Date().getTime() + 3,
    }, {
        title: __( 'Virtuosity', 'kenzap-gallery' ),
        description:  __( 'Art / Green / Red', 'kenzap-gallery' ),
        iconMediaId: '',
        icon: (window.kenzap_cta_path + 'images/gallery-img-4.jpg'),
        iconF: (window.kenzap_cta_path + 'images/gallery-img-4.jpg'),
        categories: [
            'filter1',
            'filter3',
        ],
        action: 'enlarge',
        link: '',
        linkTarget: false,
        key: new Date().getTime() + 4,
    }, {
        title: __( 'Abstraction', 'kenzap-gallery' ),
        description:  __( 'Art / Green / Red', 'kenzap-gallery' ),
        iconMediaId: '',
        icon: (window.kenzap_cta_path + 'images/gallery-img-5.jpg'),
        iconF: (window.kenzap_cta_path + 'images/gallery-img-5.jpg'),
        categories: [
            'filter1',
        ],
        action: 'enlarge',
        link: '',
        linkTarget: false,
        key: new Date().getTime() + 5,
    }, {
        title: __( 'Technique', 'kenzap-gallery' ),
        description:  __( 'Art / Green / Red', 'kenzap-gallery' ),
        iconMediaId: '',
        icon: (window.kenzap_cta_path + 'images/gallery-img-6.jpg'),
        iconF: (window.kenzap_cta_path + 'images/gallery-img-6.jpg'),
        categories: [
            'filter1',
            'filter2',
            'filter3',
        ],
        action: 'enlarge',
        link: '',
        linkTarget: false,
        key: new Date().getTime() + 6,
    }, {
        title: __( 'Performance', 'kenzap-gallery' ),
        description:  __( 'Art / Green / Red', 'kenzap-gallery' ),
        iconMediaId: '',
        icon: (window.kenzap_cta_path + 'images/gallery-img-7.jpg'),
        iconF: (window.kenzap_cta_path + 'images/gallery-img-7.jpg'),
        categories: [
            'filter1',
            'filter2',
            'filter3',
        ],
        action: 'enlarge',
        link: '',
        linkTarget: false,
        key: new Date().getTime() + 7,
    }, {
        title: __( 'Approach', 'kenzap-gallery' ),
        description:  __( 'Art / Green / Red', 'kenzap-gallery' ),
        iconMediaId: '',
        icon: (window.kenzap_cta_path + 'images/gallery-img-8.jpg'),
        iconF: (window.kenzap_cta_path + 'images/gallery-img-8.jpg'),
        categories: [
            'filter1',
            'filter2',
            'filter3',
        ],
        action: 'enlarge',
        link: '',
        linkTarget: false,
        key: new Date().getTime() + 8,
    }, {
        title: __( 'Proficiency', 'kenzap-gallery' ),
        description: __( 'Art / Green / Red', 'kenzap-gallery' ),
        iconMediaId: '',
        icon: (window.kenzap_cta_path + 'images/gallery-img-9.jpg'),
        iconF: (window.kenzap_cta_path + 'images/gallery-img-9.jpg'),
        categories: [
            'filter1',
            'filter2',
            'filter3',
        ],
        action: 'enlarge',
        link: '',
        linkTarget: false,
        key: new Date().getTime() + 9,
    }, {
        title: __( 'Designing Dreams', 'kenzap-gallery' ),
        description: __( 'Art / Green / Red', 'kenzap-gallery' ),
        iconMediaId: '',
        icon: (window.kenzap_cta_path + 'images/gallery-img-10.jpg'),
        iconF: (window.kenzap_cta_path + 'images/gallery-img-10.jpg'),
        categories: [
            'filter1',
            'filter2',
            'filter3',
        ],
        action: 'enlarge',
        link: '',
        linkTarget: false,
        key: new Date().getTime() + 10,
    }, {
        title: __( 'Inspiration', 'kenzap-gallery' ),
        description:  __( 'Art / Green / Red', 'kenzap-gallery' ),
        iconMediaId: '',
        icon: (window.kenzap_cta_path + 'images/gallery-img-2.jpg'),
        iconF: (window.kenzap_cta_path + 'images/gallery-img-2.jpg'),
        categories: [
            'filter1',
            'filter2',
            'filter3',
        ],
        action: 'enlarge',
        link: '',
        linkTarget: false,
        key: new Date().getTime() + 11,
    }, {
        title: __( 'Creative Influence', 'kenzap-gallery' ),
        description:  __( 'Art / Green / Red', 'kenzap-gallery' ),
        iconMediaId: '',
        icon: (window.kenzap_cta_path + 'images/gallery-img-3.jpg'),
        iconF: (window.kenzap_cta_path + 'images/gallery-img-3.jpg'),
        categories: [
            'filter1',
            'filter2',
            'filter3',
        ],
        action: 'enlarge',
        link: '',
        linkTarget: false,
        key: new Date().getTime() + 12,
    },
] );

export const defaultFilters = [
    {
        name: __( 'All', 'kenzap-gallery' ),
        class: '*',
    }, {
        name: __( 'Art', 'kenzap-gallery' ),
        class: 'filter1',
    }, {
        name: __( 'Green', 'kenzap-gallery' ),
        class: 'filter2',
    }, {
        name: __( 'Red', 'kenzap-gallery' ),
        class: 'filter3',
    }, {
        name: __( 'White', 'kenzap-gallery' ),
        class: 'filter4',
    },
];

/**
 * Generate inline styles for custom settings of the block
 * @param {Object} attributes - of the block
 * @returns {Node} generated styles
 */
export const getStyles = attributes => {
    const kenzapContanerStyles = {
        maxWidth: `${ attributes.containerMaxWidth === '100%' ? '100%' : attributes.containerMaxWidth + 'px' }`,
        '--maxWidth': `${ attributes.containerMaxWidth === '100%' ? '100vw' : attributes.containerMaxWidth + ' ' } `,
    };

    const hexToRgbA = ( hex, alpha ) => {
        let c;
        if ( /^#([A-Fa-f0-9]{3}){1,2}$/.test( hex ) ) {
            c = hex.substring( 1 ).split( '' );
            if ( c.length === 3 ) {
                c = [ c[ 0 ], c[ 0 ], c[ 1 ], c[ 1 ], c[ 2 ], c[ 2 ] ];
            }
            c = '0x' + c.join( '' );
            return 'rgba(' + [ ( c >> 16 ) & 255, ( c >> 8 ) & 255, c & 255 ].join( ',' ) + ',' + alpha + ')';
        }
        throw new Error( 'Bad Hex' );
    };

    const vars = {
        '--paddings': `${ attributes.containerPadding }`,
        '--paddings2': `${ attributes.containerSidePadding }px`,
        '--filtersSize': `${ attributes.filtersSize }px`,
        '--filtersColor': attributes.filtersColor,
        '--overlayColor': hexToRgbA( attributes.overlayColor, ( attributes.overlayOpacity / 100 ) ),
    };

    return {
        vars,
        kenzapContanerStyles,
    };
};

export const attrs = {
    ...blockProps,

    align: {
        type: 'string',
        default: 'full',
    },

    filtersSize: {
        type: 'number',
        default: 16,
    },

    displayType: {
        type: 'string',
        default: 'kp-horizontal',
    },

    titleColor: {
        type: 'string',
        default: '#000',
    },

    descriptionColor: {
        type: 'string',
        default: '#878787',
    },

    filtersColor: {
        type: 'string',
        default: '#878787',
    },

    overlayColor: {
        type: 'string',
        default: '#fff',
    },

    overlayOpacity: {
        type: 'number',
        default: 100,
    },

    alwaysHover: {
        type: 'boolean',
        default: false,
    },

    paddings: {
        type: 'number',
        default: 0,
    },

    columns: {
        type: 'string',
        default: '',
    },

    isFilterShow: {
        type: 'boolean',
        default: true,
    },

    items: {
        type: 'array',
        default: [],
    },

    typography: {
        type: 'array',
        default: [],
    },
    
    filters: {
        type: 'array',
        default: [],
    },

    isFirstLoad: {
        type: 'boolean',
        default: true,
    },

    preview: {
        type: 'boolean',
        default: false,
    },
};

/**
 * Define typography defaults
 */
export const typographyArr = JSON.stringify([
    {
        'title': __( '- Title', 'kenzap-gallery' ),
        'font-size': 22,
        'font-weight': 7,
        'line-height': 40,
        'margin-bottom': 0,
        'color':'#333333'
    },
    {
        'title': __( '- Description', 'kenzap-gallery' ),
        'font-size': 14,
        'font-weight': 3,
        'line-height': 20,
        'color':'#777777'
    },    
    {
        'title': __( '- Filters', 'kenzap-gallery' ),
        'font-size': 16,
        'font-weight': 3,
        'line-height': 28,
        'margin-bottom': 30,
        'color':'#666666'
    },
]);

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
registerBlockType( 'kenzap/cta-50', {
    title: __( 'Minimalist Gallery Grid', 'kenzap-gallery' ),
    icon: 'media-spreadsheet',
    category: 'layout',
    keywords: [
        __( 'kenzap cta 50', 'kenzap-gallery' ),
        __( 'grid gallery', 'kenzap-gallery' ),
        __( 'fancy box, square images', 'kenzap-gallery' ),
    ],
    anchor: true,
    html: true,
    supports: {
        align: [ 'full', 'wide' ],
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

        if ( props.attributes.preview ) return ( <img src={ `${ window.kenzap_cta_path + 'cta-50/preview.jpeg' }` } /> );
        
        if ( props.attributes.items.length === 0 && props.attributes.isFirstLoad ) {
            props.setAttributes( {
                items: [ ...JSON.parse( defaultSubBlocks ) ],
                filters: [ ...defaultFilters ],
                isFirstLoad: false,
            } );
        }
        Object.keys( props.attributes ).forEach( attr => {
            if ( typeof props.attributes[ attr ] === 'undefined' ) {
                props.attributes[ attr ] = attrs[ attr ].default;
            }
        } );
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

        Object.keys( attributes ).forEach( attr => {
            if ( typeof attributes[ attr ] === 'undefined' ) {
                attributes[ attr ] = attrs[ attr ].default;
            }
        } );

        const { vars, kenzapContanerStyles } = getStyles( props.attributes );

        const getImage = ( item ) => {
            switch ( item.action ) {
                case 'link':
                    return (
                        <a
                            href={ item.link }
                            target={ item.linkTarget ? '_blank' : '_self' }
                            className="kp-img"
                            style={ {
                                backgroundImage: `url(${ (item.icon) })`,
                            } }
                            rel="noopener noreferrer"
                        />
                    );
                case 'nothing':
                    return (
                        <div
                            className="kp-img nothing"
                            style={ {
                                backgroundImage: `url(${ (item.icon) })`,
                            } }
                        />
                    );
                default:
                    return (
                        <div
                            className="kp-img"
                            style={ {
                                backgroundImage: `url(${ (item.icon) })`,
                            } }
                        />
                    );
            }
        };

        const getLink = ( item ) => {
            switch ( item.action ) {
                case 'link':
                    return (
                        <a
                            href={ item.link }
                            target={ item.linkTarget ? '_blank' : '_self' }
                            rel="noopener noreferrer"
                        >
                            <RichText.Content
                                tagName="h3"
                                value={ item.title }
                                style={ getTypography( attributes, 0 ) }
                            />

                            <RichText.Content
                                tagName="span"
                                value={ item.description }
                                className={ `kp-description-link ${ item.action !== 'nothing' ? 'gal2__filterItem' : '' }` }
                                style={ getTypography( attributes, 1 ) }
                            />

{/* <h3 style={ getTypography( attributes, 0 ) } >{ item.title }</h3> */}

{/* 
                            <span
                                style={ getTypography( attributes, 1 ) }
                                // style={ {
                                //     fontSize: `${ attributes.descriptionSize }px`,
                                // } }
                                className={ `kp-description-link ${ item.action !== 'nothing' ? 'gal2__filterItem' : '' }` }
                            >
                                { item.description }
                            </span> */}
                        </a>
                    );
                case 'nothing':
                    return (
                        <a className="nothing" href="javascript::void(0)">

                            <RichText.Content
                                tagName="h3"
                                value={ item.title }
                                style={ getTypography( attributes, 0 ) }
                            />

                            <RichText.Content
                                tagName="span"
                                value={ item.description }
                                className={ `kp-description-link ${ item.action !== 'nothing' ? 'gal2__filterItem' : '' }` }
                                style={ getTypography( attributes, 1 ) }
                            />
                        </a>
                    );
                default:
                    return (
                        <a
                            href={ item.iconF }
                            data-thumb={ item.icon }
                            data-fancybox="gallery"
                        >
                            <RichText.Content
                                tagName="h3"
                                value={ item.title }
                                style={ getTypography( attributes, 0 ) }
                            />

                            <RichText.Content
                                tagName="span"
                                value={ item.description }
                                className={ `kp-description-link ${ item.action !== 'nothing' ? 'gal2__filterItem' : '' }` }
                                style={ getTypography( attributes, 1 ) }
                            />

                        </a>
                    );
            }
        };

        return (
            <div className={ className ? className : '' } style={ vars }>
                <ContainerSave
                    className={ `kenzap-gallery-2 ${ attributes.alwaysHover ? 'kp-hover' : '' } ${ attributes.columns === 'default' ? '' : attributes.columns } ${ attributes.displayType }` }
                    attributes={ attributes }
                    style={ vars }
                    withBackground
                    withPadding
                >
                    <div className="kenzap-container" style={ kenzapContanerStyles }>
                        { attributes.nestedBlocks == 'top' && <InnerBlocks.Content /> }
                        { attributes.isFilterShow && <ul className="kp-filter" style={ {...getTypography( attributes, 2, 'margin-bottom' ),...getTypography( attributes, 2, 'text-align' ) } }>
                            { attributes.filters.map( ( filter, index ) => (
                                <li key={ filter.id } style={ {
                                    fontSize: `${ attributes.filtersSize }px`,
                                } }>
                                    <a
                                        href="#"
                                        className={ `filter ${ index === 0 ? 'active' : '' }` }
                                        data-filter={ filter.class === '*' ? '*' : `.${ filter.class }` }
                                    >
                                        <span
                                            style={ {display:'inline',...getTypography( attributes, 2 )} }
                                        >
                                            { filter.name }
                                        </span>
                                    </a>
                                </li>
                            ) ) }
                        </ul>
                        }
                        <div className="kp-list">
                            <div className="grid-sizer" />
                            { attributes.items && attributes.items.map( ( item, index ) => {
                                return (
                                    <div
                                        key={ item.key }
                                        className={ `kp-item ${ item.categories.join( ' ' ) }` }
                                        style={ { padding: `${ attributes.paddings }px` } }
                                    >
                                        <div className="gallery-box" >
                                            <div className="kp-info">
                                                { getLink( item ) }
                                            </div>
                                            { getImage( item ) }
                                        </div>
                                    </div>
                                );
                            } ) }
                        </div>
                        { attributes.nestedBlocks == 'bottom' && <InnerBlocks.Content /> }
                    </div>
                </ContainerSave>
            </div>
        );
    },
} );
