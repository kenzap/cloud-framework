import './style.scss';
import './editor.scss';

const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { RichText, InnerBlocks } = wp.editor;
import { blockProps, ContainerSave } from '../commonComponents/container/container';
import { getTypography } from '../commonComponents/typography/typography';
import Edit from './edit';

/**
 * Provides the initial data for new block
 * @type {{title: string, icon: string, iconMediaId: string, iconMediaUrl: string, description: string}}
 */
export const defaultItem = {
    title: __( 'New feature', 'kenzap-features' ),
    iconMediaId: '',
    iconMediaUrl: (window.kenzap_cta_path + 'images/featured-1.svg'),
    description: __( 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam semper lacus at massa ultricies auctor. Integer sodales commodo', 'kenzap-features' ),
};

export const defaultSubBlocks = JSON.stringify( [
    { ...defaultItem, title: __( 'New Feature 1', 'kenzap-features' ), key: 'default1', iconMediaUrl: (window.kenzap_cta_path + 'images/featured-1.svg') },
    { ...defaultItem, title: __( 'New Feature 2', 'kenzap-features' ), key: 'default2', iconMediaUrl: (window.kenzap_cta_path + 'images/featured-2.svg') },
    { ...defaultItem, title: __( 'New Feature 3', 'kenzap-features' ), key: 'default3', iconMediaUrl: (window.kenzap_cta_path + 'images/featured-3.svg') },
] );

/**
 * Generate inline styles for custom settings of the block
 * @param {Object} attributes - of the block
 * @returns {Node} generated styles
 */
export const getStyles = attributes => {

    const varsTop = {
        '--paddings': `${ attributes.containerPadding }`,
        '--paddings2': `${ attributes.containerSidePadding }px`,
    };

    const vars = {};

    const kenzapContanerStyles = {
        maxWidth: `${ attributes.containerMaxWidth === '100%' ? '100%' : attributes.containerMaxWidth + 'px' }`,
        '--maxWidth': `${ attributes.containerMaxWidth === '100%' ? '100wh' : attributes.containerMaxWidth + ' ' } `,
        '--maxWidthCSS': `${ attributes.containerMaxWidth === '100%' ? '2000' : attributes.containerMaxWidth + ' ' } `,
    };

    return {
        varsTop,
        vars,
        kenzapContanerStyles,
    };
};


/**
 * Define typography defaults
 */
export const typographyArr = JSON.stringify([
    {
        'title': __( '- Heading', 'kenzap-steps' ),
        'type': 'title',
        'font-size': 54,
        'font-size-t': 50,
        'font-size-m': 48,
        'font-weight': 7,
        'line-height': 64,
        'margin-top': 40,
        'margin-bottom': 80,
        'color': '#ffffff',
    },
    {
        'title': __( '- Title', 'kenzap-steps' ),
        'text-align':'',
        'font-size': 24,
        'font-weight': 6,
        'line-height': 25,
        'margin-bottom': 20,
        'color': '#ffffff',
    },
    {
        'title': __( '- Description', 'kenzap-steps' ),
        'text-align':'',
        'font-size': 15,
        'font-weight': 4,
        'line-height': 23,
        'margin-bottom': 20,
        'color': '#ffffff',
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
registerBlockType( 'kenzap/cta-58', {
    title: __( 'Carousel Feature List', 'kenzap-features' ),
    icon: 'yes',
    category: 'layout',
    keywords: [
        __( 'kenzap cta 58', 'kenzap-features' ),
        __( 'features, advantages, info block', 'kenzap-features' ),
    ],
    anchor: true,
    html: true,
    supports: {
        align: [ 'full', 'wide' ],
    },
    attributes: {
        ...blockProps,

        align: {
            type: 'string',
            default: 'full',
        },

        containerPadding: {
            type: 'number',
            default: 58,
        },

        mainTitle: {
            type: 'string',
            default: __( 'Advantages of Your Business Here & Share it with Kenzap', 'kenzap-features' ),
        },

        mainTitleColor: {
            type: 'string',
            default: '#fff',
        },

        iconSize: {
            type: 'number',
            default: 40,
        },

        titleColor: {
            type: 'string',
            default: '#fff',
        },

        descriptionColor: {
            type: 'string',
            default: '#fff',
        },

        items: {
            type: 'array',
            default: [],
        },
        
        typography: {
            type: 'array',
            default: [],
        },

        isFirstLoad: {
            type: 'boolean',
            default: true,
        },

        blockUniqId: {
            type: 'number',
            default: 0,
        },

        preview: {
            type: 'boolean',
            default: false,
        },
    },

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

        if( props.attributes.preview ) return ( <img src={ `${ window.kenzap_cta_path + 'cta-58/preview.jpeg' }` } /> );


        if ( props.attributes.items.length === 0 && props.attributes.isFirstLoad ) {
            props.setAttributes( {
                items: [ ...JSON.parse( defaultSubBlocks ) ],
                isFirstLoad: false,
                backgroundColor: '#0693e3',
            } );
          
            props.attributes.items = JSON.parse( defaultSubBlocks );
            if ( ! props.attributes.blockUniqId ) {
                props.setAttributes( {
                    blockUniqId: new Date().getTime(),
                } );
            }
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

        const { varsTop, vars, kenzapContanerStyles } = getStyles( props.attributes );

        return (
            <div className={ className ? className : '' } style={ varsTop }>
                <ContainerSave
                    className={ `kfl2 block-${ attributes.blockUniqId }` }
                    attributes={ attributes }
                    style={ vars }
                    withBackground
                    withPadding
                >
                    <div className="kenzap-container" style={ kenzapContanerStyles }>
                        { attributes.nestedBlocks == 'top' && <InnerBlocks.Content /> }
                        <RichText.Content
                            tagName="h2"
                            value={ attributes.mainTitle }
                            style={ getTypography( attributes, 0 ) }
                        />
                        <div className="owl-carousel owl-load">

                            { attributes.items && attributes.items.map( item => (
                                <div key={ item.key } className="featured-box">
                                    <div className="featured-img">
                                        { item.iconMediaUrl &&
                                        <img
                                            src={ (item.iconMediaUrl) }
                                            alt={ item.title.replace( /<(?:.|\n)*?>/gm, '' ) }
                                            style={ {
                                                height: `${ attributes.iconSize }px`,
                                            } }
                                        />
                                        }
                                    </div>
                                    <RichText.Content
                                        tagName="h3"
                                        value={ item.title }
                                        style={ getTypography( attributes, 1 ) }
                                    />
                                    <RichText.Content
                                        tagName="p"
                                        value={ item.description }
                                        style={ getTypography( attributes, 2 ) }
                                    />
                                </div>
                            ) ) }
                        </div>
                        { attributes.nestedBlocks == 'bottom' && <InnerBlocks.Content /> }
                    </div>
                </ContainerSave>
            </div>
        );
    },
} );
