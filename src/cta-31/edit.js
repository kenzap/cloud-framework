const { __ } = wp.i18n;
const { Component } = wp.element;
const { RichText, InspectorControls, MediaUpload, PanelColorSettings, InnerBlocks } = wp.editor;
const { RangeControl, PanelBody } = wp.components;
import { defaultItem, getStyles, typographyArr } from './block';
import { InspectorContainer, ContainerEdit } from '../commonComponents/container/container';
import { TypographyContainer, getTypography } from '../commonComponents/typography/typography';
import { Plus } from '../commonComponents/icons/plus';

/**
 * Keys for new blocks
 * @type {number}
 */
let key = 0;

/**
 * The edit function describes the structure of your block in the context of the editor.
 * This represents what the editor will render when the block is used.
 *
 * The "edit" property must be a valid function.
 * @param {Object} props - attributes
 * @returns {Node} rendered component
 */
export default class Edit extends Component {
    state = {
        activeSubBlock: -1,
    };

    /**
     * Add a new item to list with default fields
     */
    addItem = () => {
        key++;
        this.props.setAttributes( {
            items: [ ...this.props.attributes.items, {
                ...defaultItem,
                title: defaultItem.title + ' ' + ( key ),
                imageUrl: window.kenzap_testimonials_gutenberg_path + 'testimonials-list-3/testimonial-img-' + Math.round( 1 - 0.5 + ( Math.random() * ( 3 - 1 + 1 ) ) ) + '.png',
                key: 'new ' + new Date().getTime(),
            } ],
        } );
        setTimeout( () => {
            const element = document.querySelector( '.kenzap-testimonials-3 .owl-carousel' );
            element.scrollLeft = element.scrollWidth;
        } );
    };

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

    /**
     * Remove item
     * It also add default item if we remove all elements from array
     * @param {number} index - of item
     */
    removeItem = ( index ) => {
        const items = [ ...this.props.attributes.items ];
        if ( items.length === 1 ) {
            this.props.setAttributes( {
                items: [ {
                    ...defaultItem,
                    imageUrl: window.kenzap_testimonials_gutenberg_path + 'testimonials-list-3/testimonial-img-' + Math.round( 1 - 0.5 + ( Math.random() * ( 3 - 1 + 1 ) ) ) + '.png',
                } ],
            } );
        } else {
            items.splice( index, 1 );
            this.props.setAttributes( { items: items } );
        }
    };

    render() {
        const {
            className,
            attributes,
            setAttributes,
            isSelected,
        } = this.props;

        const { vars, kenzapContanerStyles } = getStyles( attributes );
        return (
            <div>
                <InspectorControls>
                    <PanelBody
                        title={ __( 'General', 'kenzap-testimonials' ) }
                        initialOpen={ false }
                    >
                        <RangeControl
                            label={ __( 'Avatar size', 'kenzap-testimonials' ) }
                            value={ attributes.imageSize }
                            onChange={ ( imageSize ) => setAttributes( { imageSize } ) }
                            min={ 50 }
                            max={ 200 }
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
                <div className={ className ? className : '' } style={ vars }>
                    <ContainerEdit
                        className={ `kenzap-testimonials-3 block-${ attributes.blockUniqId } ${ isSelected ? 'selected' : '' } ` }
                        attributes={ attributes }
                        withBackground
                        withPadding
                    >
                        <div className="kenzap-container" style={ kenzapContanerStyles }>
                            <div className="owl-carousel">
                                { attributes.items && attributes.items.map( ( item, index ) => (
                                    <div
                                        key={ item.key }
                                        className="testimonial-box"
                                    >
                                        <button className="remove" onClick={ () => this.removeItem( index ) }>
                                            <span className="dashicons dashicons-no" />
                                        </button>
                                        <div className="testimonial-image" style={ { width: `${ attributes.imageSize }px` } } >
                                            { item.imageUrl ? (
                                                <MediaUpload
                                                    onSelect={ ( media ) => {
                                                        this.onChangePropertyItem( 'imageId', media.id, index );
                                                        this.onChangePropertyItem( 'imageUrl', media.url, index, true );
                                                    } }
                                                    value={ item.imageId }
                                                    allowedTypes={ [ 'image', 'image/svg' ] }
                                                    render={ ( props ) => (
                                                        <img
                                                            src={ item.imageUrl }
                                                            alt={ item.author.replace( /<(?:.|\n)*?>/gm, '' ) }
                                                            style={ {
                                                                cursor: 'pointer',
                                                                position: 'relative',
                                                                zIndex: 10,
                                                            } }
                                                            onClick={ props.open }
                                                            role="presentation"
                                                        />
                                                    ) }
                                                />
                                            ) : (
                                                <div
                                                    className="addIcon"
                                                >
                                                    <MediaUpload
                                                        onSelect={ ( media ) => {
                                                            this.onChangePropertyItem( 'imageId', media.id, index );
                                                            this.onChangePropertyItem( 'imageUrl', media.url, index, true );
                                                        } }
                                                        value={ item.imageId }
                                                        allowedTypes={ [ 'image', 'image/svg' ] }
                                                        render={ ( props ) => (
                                                            <button onClick={ props.open }>
                                                                { __( 'Upload/Choose icon', 'kenzap-testimonials' ) }
                                                            </button>
                                                        ) }
                                                    />
                                                </div>
                                            ) }
                                        </div>
                                        <div className="testimonial-content">
                                            <RichText
                                                tagName="p"
                                                placeholder={ __( 'Testimonial', 'kenzap-testimonials' ) }
                                                value={ item.testimonial }
                                                onChange={ ( value ) => this.onChangePropertyItem( 'testimonial', value, index, true ) }
                                                style={ getTypography( attributes, 0 ) }
                                            />
                                            <RichText
                                                tagName="span"
                                                placeholder={ __( 'Author', 'kenzap-testimonials' ) }
                                                value={ item.author }
                                                onChange={ ( value ) => this.onChangePropertyItem( 'author', value, index, true ) }
                                                style={ getTypography( attributes, 1 ) }
                                            />
                                        </div>
                                    </div>
                                ) ) }
                            </div>
                        </div>
                        <div className="editPadding" />
                        <button
                            className="addWhite"
                            onClick={ this.addItem }>
                            <span><Plus /></span>{ __( 'Add new testimonial', 'kenzap-testimonials' ) }
                        </button>
                    </ContainerEdit>
                </div>
            </div>
        );
    }
}
