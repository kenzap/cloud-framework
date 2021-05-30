import './style.scss';
import './editor.scss';

const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { RichText, InnerBlocks } = wp.editor;
import { blockProps, ContainerSave, uo } from '../commonComponents/container/container';
import { getTypography } from '../commonComponents/typography/typography';
import { hexToRGB } from '../commonComponents/helpers/helpers';
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
        '--textColor': `${ attributes.textColor }`,
        '--textColor4': `${ hexToRGB(attributes.textColor3, attributes.opacity/100) }`,
        '--textColor5': `${ hexToRGB(attributes.textColor4, attributes.opacity/100) }`,
        '--angle': `${ attributes.angle }deg`,
    };

    if ( attributes.img1 != "none" ){ vars["--img1"] = 'url('+ uo(attributes.img1) +')'; vars['--img1S'] = `${ attributes.img1Size }px` }else{ vars["--img1"] = 'unset'; vars['--img1S'] = '0';}

    if ( attributes.backgroundColor ) { vars["--backgroundColor"] = attributes.backgroundColor; }
    
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
        'title': __( '- Title', 'kenzap-cta' ),
        'type': 'title',
        'font-size': 55,
        'font-size-t': 55,
        'font-size-m': 50,
        'font-weight': 7,
        'line-height': 60,
        'margin-bottom': 20,
        'color': '#ffffff',
    },
    {
        'title': __( '- Description', 'kenzap-cta' ),
        'font-size': 20,
        'font-weight': 4,
        'line-height': 30,
        'margin-bottom': 26,
        'color': '#ffffff'
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
registerBlockType( 'kenzap/cta-22', {
    title: __( 'Playback Banner', 'kenzap-cta' ),
    icon: 'migrate',
    category: 'layout',
    keywords: [
        __( 'Youtube Banner', 'kenzap-cta' ),
        __( 'call to action, kenzap cta 22', 'kenzap-cta' ),
        __( 'video playback, link banner', 'kenzap-cta' ),
    ],
    html: true,
    supports: {
        align: [ 'full', 'wide' ],
        anchor: true,
    },
    attributes: {
        ...blockProps,

        align: {
            type: 'string',
            default: 'full',
        },

        title: {
            type: 'string',
            default: __( 'LIVE THERE', 'kenzap-cta' ),
        },

        caption: {
            type: 'string',
            default: __( 'Book events from anywhere in 191+ countries and get awesome experience Lorem ipsum dolor sit amet, consectetuer adipiscing elit,', 'kenzap-cta' ),
        },

        video: {
            type: 'string',
            default: 'https://www.youtube.com/embed/ctvlUvN6wSE?controls=0',
        },

        link: {
            type: 'string',
            default: __( '<a href="#">Presentation</a> <a href="#">Tickets</a>', 'kenzap-cta' ),
        },

        link2: {
            type: 'string',
            default: __( '<a href="#">Tickets</a>', 'kenzap-cta' ),
        },

        angle: {
            type: 'number',
            default: 135,
        },

        titleSize: {
            type: 'number',
            default: 55,
        },

        descSize: {
            type: 'number',
            default: 20,
        },

        textThickness: {
            type: 'number',
            default: 7,
        },

        openFirst: {
            type: 'boolean',
            default: true,
        },

        img1: {
            type: 'string',
            default: uo(window.kenzap_cta_path + "images/play-btn.svg"),
        },

        img1Size: {
            type: 'number',
            default: 80,
        },

        textColor: {
            type: 'string',
        },

        textColor3: {
            type: 'string',
        },

        textColor4: {
            type: 'string',
        },

        action: {
            type: 'boolean',
            default: true,
        },

        actionNew: {
            type: 'boolean',
            default: true,
        },

        paddingTop: {
            type: 'number',
            default: 0,
        },

        opacity: {
            type: 'number',
            default: 89,
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

        isVisible: {
            type: 'boolean',
            default: false,
        },

        randomValue: {
            type: 'string'
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

        if ( props.attributes.preview ) return ( <img src={ `${ window.kenzap_cta_path + 'cta-22/preview.jpeg' }` } /> );

        if(props.attributes.isFirstLoad){

            props.setAttributes( { textColor:'#ffffff', textColor3:'#750179', textColor4:'#d61010', backgroundColor: '#fff', containerPadding: 140, backgroundImage: uo(window.kenzap_cta_path + "images/banner-img-7.jpg"), backgroundImageId:10, backgroundStyle:'cover' } );
            props.setAttributes( { isFirstLoad: false } );
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
                    className={ `kp-bn7 block-${ attributes.blockUniqId }` }
                    attributes={ attributes }
                    style={ vars }
                    withBackground
                    withPadding
                    >

                    <div class="kenzap-container" style={ kenzapContanerStyles }>
                        { attributes.nestedBlocks == 'top' && <InnerBlocks.Content /> }
                        <div id="kp-modal" class="kp-modal">
                            <iframe width="560" height="315" src={ attributes.video } allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            <div class="kp-modc">
                                <p>{ attributes.caption }</p>
                            </div>
                        </div>
                        <div class="kp-content">

                            { attributes.title && <RichText.Content
                                tagName="h1"
                                className="kpt"
                                value={ attributes.title }
                                style={ getTypography( attributes, 0 ) }
                            /> }

                            { attributes.caption && <RichText.Content
                                tagName="p"
                                className="kpc"
                                value={ attributes.caption }
                                style={ getTypography( attributes, 1 ) }
                            /> }

                            <div class="kpa">
                                { attributes.action && <a href="#kp-modal" class="modal-link" rel="modal:open"><div class="kpim" ></div></a> }
                                { !attributes.action && <a target={ attributes.actionNew?"_blank":"_self" } rel="noopener noreferrer" href={ attributes.video } ><div class="kpim" ></div></a> }
                            </div>
                        </div>
                        { attributes.nestedBlocks == 'bottom' && <InnerBlocks.Content /> }
                    </div>

                </ContainerSave>
            </div>
        );
    },
} );
