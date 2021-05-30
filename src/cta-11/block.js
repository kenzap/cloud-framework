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
 * Provides the initial data for new block
 */
export const defaultItem = {
    title: __( 'How can I use Kenzap Cloud?', 'kenzap-cta' ),
    description: __( 'Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Libero varius ligula a id nec libero amet non metus ligula risus egestas senectus euismod. Nulla risus aliquam.', 'kenzap-cta' ),
    color: '#fff',
    color2: '#333',
    img1: uo(window.kenzap_cta_path + "images/info-img-1.jpg"),
};

export const defaultSubBlocks = JSON.stringify( [
    {
        title: __( 'How can I use Kenzap Cloud?', 'kenzap-cta' ),
        description: __( 'Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Libero varius ligula a id nec libero amet non metus ligula risus egestas senectus euismod. Nulla risus aliquam.', 'kenzap-cta' ),
        color: '#fff',
        color2: '#333',
        key: new Date().getTime() + 1,
    }, {
        title: __( 'What is the Best Way to Install Theme?', 'kenzap-cta' ),
        description: __( 'Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Libero varius ligula a id nec libero amet non metus ligula risus egestas senectus euismod. Nulla risus aliquam.', 'kenzap-cta' ),
        color: '#fff',
        color2: '#333',
        key: new Date().getTime() + 2,
    }, {
        title: __( 'Can I Use this Plugin Free of Charge?', 'kenzap-cta' ),
        description: __( 'Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Libero varius ligula a id nec libero amet non metus ligula risus egestas senectus euismod. Nulla risus aliquam.', 'kenzap-cta' ),
        color: '#fff',
        color2: '#333',
        key: new Date().getTime() + 2,
    }, {
        title: __( 'Where Kenzap Cloud is Operated', 'kenzap-cta' ),
        description: __( 'Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Libero varius ligula a id nec libero amet non metus ligula risus egestas senectus euismod. Nulla risus aliquam.', 'kenzap-cta' ),
        color: '#fff',
        color2: '#333',
        key: new Date().getTime() + 2,
    }, {
        title: __( 'Are there Discount for Non Profit Organizations', 'kenzap-cta' ),
        description: __( 'Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Libero varius ligula a id nec libero amet non metus ligula risus egestas senectus euismod. Nulla risus aliquam.', 'kenzap-cta' ),
        color: '#fff',
        color2: '#333',
        key: new Date().getTime() + 2,
    }, {
        title: __( 'How to Customize Kenzap Plugins?', 'kenzap-cta' ),
        description: __( 'Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Libero varius ligula a id nec libero amet non metus ligula risus egestas senectus euismod. Nulla risus aliquam.', 'kenzap-cta' ),
        color: '#fff',
        color2: '#333',
        key: new Date().getTime() + 2,
    }
] );

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
        '--textColor3': `${ hexToRGB(attributes.textColor3, attributes.borderTrans/100) }`,
    };

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
        'title': __( '- Question', 'kenzap-cta' ),
        'font-size': 19,
        'font-weight': 7,
        'line-height': 34,
        'margin-bottom': 0,
        'color': '#23282d'
    },
    {
        'title': __( '- Answer', 'kenzap-cta' ),
        'font-size': 15,
        'font-weight': 4,
        'line-height': 24,
        'margin-bottom': 20,
        'color': '#23282d'
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
registerBlockType( 'kenzap/cta-11', {
    title: __( 'Accordion Dropdown', 'kenzap-cta' ),
    icon: 'migrate',
    category: 'layout',
    keywords: [
        __( 'kenzap cta 11', 'kenzap-cta' ),
        __( 'Question and answer', 'kenzap-cta' ),
        __( 'faq section', 'kenzap-cta' ),
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

        columns: {
            type: 'string',
            default: 'one',
        },

        elements: {
            type: 'number',
            default: 6,
        },

        borderTrans: {
            type: 'number',
            default: 100,
        },

        openFirst: {
            type: 'boolean',
            default: true,
        },

        textColor: {
            type: 'string',
            default: '#23282d',
        },

        textColor3: {
            type: 'string',
            default: '#23282d',
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

        if ( props.attributes.preview ) return ( <img src={ `${ window.kenzap_cta_path + 'cta-11/preview.jpeg' }` } /> );

        if ( props.attributes.items.length === 0 && props.attributes.isFirstLoad ) {
            props.setAttributes( {
                items: [ ...JSON.parse( defaultSubBlocks ) ],
                isFirstLoad: false,
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

        const { vars, kenzapContanerStyles } = getStyles( props.attributes );

        const isEven = (n) => { return n % 2 == 0; }

        const getAccordionBody = ( item, index, indexOpen ) => {
            return(
                <li>
                    <a className={ `toggle ${ attributes.openFirst && index<indexOpen ? 'active': '' }` }
                    rel="noopener noreferrer"
                    href="#">
                    <i class="plus"></i>
                    <RichText.Content
                        tagName="span"
                        className="kp-sp"
                        value={ item.title }
                        style={ getTypography( attributes, 0 ) }
                        />

                    </a>
                    <div className={ `inner ${ attributes.openFirst && index<indexOpen ? 'show': '' }` }
                        style={ { display: attributes.openFirst && index<indexOpen ? 'block': '' } }>
                        <RichText.Content
                            tagName="p"
                            className="kp-p"
                            value={ item.description }
                            style={ getTypography( attributes, 1 ) }
                            />
                    </div>
                </li>
            );
        }

        return (
            <div id={ attributes.anchor } className={ className ? className : '' } style={ vars }>
                <ContainerSave
                    className={ `kpacc2 ${ attributes.topOffset > 0 ? 'topOffset': '' } block-${ attributes.blockUniqId }` }
                    attributes={ attributes }
                    style={ vars }
                    withBackground
                    withPadding
                    >

                    <div className="kenzap-container" style={ kenzapContanerStyles }>
                        { attributes.nestedBlocks == 'top' && <InnerBlocks.Content /> }
                        <div class="kenzap-row">

                            {/* two column accordion left pane */}
                            { attributes.columns == 'two' && <div class="kenzap-col-6"> 
                                <ul class="accordion">

                                { attributes.items && attributes.items.map( ( item, index ) => (
                                    
                                    isEven(index) && getAccordionBody( item, index, 2 )

                                ) ) }

                                </ul>
                            </div> }

                            {/* two column accordion right pane */}
                            { attributes.columns == 'two' && <div class="kenzap-col-6"> 
                                <ul class="accordion">

                                { attributes.items && attributes.items.map( ( item, index ) => (
                                    
                                    !isEven(index) && getAccordionBody( item, index, 2 )

                                ) ) }

                                </ul>
                            </div> }

                            {/* one column accordion */}
                            { attributes.columns == 'one' &&
                                <ul class="accordion">

                                { attributes.items && attributes.items.map( ( item, index ) => (
                                    
                                    getAccordionBody( item, index, 1 )

                                ) ) }

                                </ul>
                            }
                        </div>  
                        { attributes.nestedBlocks == 'bottom' && <InnerBlocks.Content /> }   
                    </div>

                </ContainerSave>
            </div>
        );
    },
} );
