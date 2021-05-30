import './style.scss';
import './editor.scss';

const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { RichText, InnerBlocks } = wp.editor;
import { blockProps, ContainerSave, uo } from '../commonComponents/container/container';
import { getTypography } from '../commonComponents/typography/typography';
import Edit from './edit';


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
        '--iconWidth': `${ attributes.iconWidth }`,
        '--iconHeight': `${ attributes.iconHeight }`,
        '--textColor2': `${ attributes.textColor2 }`,
        '--icon': `${ 'unset' }`,
    };

    if ( attributes.icon !== 'none' ) { 
        vars['--icon'] = `${ 'url('+ uo(attributes.icon) +')' }`; vars['--icond'] = "block"; }else{ vars['--icond'] = "none"; 
    }

    vars['--iconTop'] =  attributes.iconTop;
    vars['--iconRight'] =  attributes.iconRight;
    vars['--iconBottom'] =  attributes.iconBottom;
    vars['--iconLeft'] =  attributes.iconLeft;
    
    return {
        vars,
        kenzapContanerStyles,
    };
};

/**
 * Define typography defaults
 */
export const typographyArr = JSON.stringify([
    {
        'title': __( '- Title', 'kenzap-plugin' ),
        'type': 'title',
        'font-size': 40,
        'font-size-t': 40,
        'font-size-m': 40,
        'font-weight': 6,
        'line-height': 45,
        'margin-bottom': 20,
        'color': '#23282d',
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
registerBlockType( 'kenzap/cta-66', {
    title: __( 'Beautiful Heading', 'kenzap-plugin' ),
    icon: <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" role="img" aria-hidden="true" focusable="false"><path d="M5 4v3h5.5v12h3V7H19V4z"></path><path fill="none" d="M0 0h24v24H0V0z"></path></svg>,
    category: 'layout',
    keywords: [
        __( 'kenzap cta 66', 'kenzap-plugin' ),
        __( 'Headline, Heading', 'kenzap-plugin' ),
        __( 'Title', 'kenzap-plugin' ),
    ],
    supports: {
        align: [ 'full', ],
        anchor: true,
    },
    html: true,
    attributes: {
        ...blockProps,

        title: {
            type: 'string',
            default: __( 'Beautiful Heading', 'kenzap-plugin' ),
        },

        level: {
            type: 'string',
            default: '2',
        },
        
        alignTitle: {
            type: 'string',
            default: 'center'
        },
    
        icon: {
            type: 'string',
            default: 'none',
        },
    
        iconId: {
            type: 'string',
            default: '',
        },

        textColor2: {
            type: 'string',
            default: '#23282d',
        },

        isFirstLoad: {
            type: 'boolean',
            default: true,
        },

        iconWidth: {
            type: 'string',
            default: '40px',
        },

        iconHeight: {
            type: 'string',
            default: '40px',
        },

        iconPos: {
            type: 'string',
            default: 'tl',
        },

        iconTop: {
            type: 'string',
            default: '10px',
        },

        iconRight: {
            type: 'string',
            default: '10px',
        },

        iconBottom: {
            type: 'string',
            default: '10px',
        },

        iconLeft: {
            type: 'string',
            default: '10px',
        },

        blockUniqId: {
            type: 'number',
            default: 0,
        },

        typography: {
            type: 'array',
            default: [],
        },

        fontsize: {type: 'string',},

        randomValueT: {type: 'string',},

		t0: {
			type: 'string',
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

        if ( props.attributes.preview ) return ( <img src={ `${ window.kenzap_cta_path + 'cta-66/preview.jpeg' }` } /> );

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
                    className={ `kphd-1` }
                    attributes={ attributes }
                    style={ vars }
                    withBackground
                    withPadding
                >
                    <div className="kenzap-tcont" style={ {...kenzapContanerStyles, ...getTypography( attributes, 0, "text-align" ) } }>
                        { attributes.nestedBlocks == 'top' && <InnerBlocks.Content /> }
                        <RichText.Content
                            className="kp-h"
                            tagName={ "h"+attributes.level }
                            value={ attributes.title }
                            style={ getTypography( attributes, 0 ) }
                        />
                        { attributes.nestedBlocks == 'bottom' && <InnerBlocks.Content /> }
                    </div>
                </ContainerSave>
            </div>
        );
    },
} );
