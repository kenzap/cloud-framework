const { __ } = wp.i18n;
const { Component } = wp.element;
const { MediaUpload, RichText, InspectorControls, InnerBlocks } = wp.editor;
const { RangeControl, PanelBody, CheckboxControl } = wp.components;
import { ContainerEdit, InspectorContainer } from '../commonComponents/container/container';
import { defaultItem, typographyArr, getStyles } from './block';
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
    /**
     * Add a new item to list with default fields
     */
    addItem = () => {
        key++;
        this.props.setAttributes( {
            items: [ ...this.props.attributes.items, {
                ...defaultItem,
                title: defaultItem.title + ' ' + ( key ),
                key: 'new ' + new Date().getTime(),
            } ],
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
            this.props.setAttributes( { items: [ defaultItem ] } );
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

        const {
            vars,
            kenzapContanerStyles,
        } = getStyles( attributes );

        return (
            <div>
                <InspectorControls>
                    <PanelBody
                        title={ __( 'General', 'kenzap-features' ) }
                        initialOpen={ false }
                    >
                        <RangeControl
                            label={ __( 'Icons size', 'kenzap-features' ) }
                            value={ attributes.iconSize }
                            onChange={ ( iconSize ) => setAttributes( { iconSize } ) }
                            min={ 25 }
                            max={ 50 }
                        />

                        <CheckboxControl
                            label={ __( 'Text visible', 'kenzap-features' ) }
                            checked={ attributes.vid }
                            onChange={ ( value ) => {
                                setAttributes( {
                                    vis: value,
                                } );
                            } }
                            help={ __( 'Make paragraph block always visible on frontend.', 'kenzap-features' ) }
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
                        withNested
                        withPadding
                        withWidth100
                        withBackground
                    />
                </InspectorControls>

                <div className={ `kenzap ${ className ? className : '' }` }>
                    <ContainerEdit
                        className={ `kp-featured-1 ${ isSelected ? 'selected' : '' } ` }
                        style={ { ...vars } }
                        attributes={ attributes }
                        withBackground
                        withPadding
                    >
                        <div className={ `kenzap-container` } style={ kenzapContanerStyles }>
                            { attributes.nestedBlocks == 'top' && <InnerBlocks /> }
                            <div className="kp-content">
                                { attributes.items && attributes.items.map( ( item, index ) => (

                                    <div 
                                        key={ item.key }
                                        className="kp-box">
                                        <button
                                            className="remove" onClick={ () => this.removeItem( index ) }>
                                            <i className="dashicons dashicons-no" />
                                        </button>
                                        <div className="kp-wrapper">
                                            <MediaUpload
                                                onSelect={ ( media ) => {
                                                        this.onChangePropertyItem( 'iconMediaId', media.id, index );
                                                        this.onChangePropertyItem( 'iconMediaUrl', media.url, index, true );
                                                    } }
                                                value={ item.iconMediaId }
                                                render={ ( props ) => (
                                                    <div
                                                        className="kp-img"
                                                        style={ {
                                                            cursor: 'pointer',
                                                            position: 'relative',
                                                            zIndex: 10,
                                                            width: attributes.iconSize,
                                                            height: attributes.iconSize,
                                                            "--icon":"url(" + item.iconMediaUrl + ")",
                                                        } }
                                                        onClick={ props.open }
                                                        role="presentation" />
                                                ) }
                                            />

                                            <RichText
                                                tagName="h3"
                                                className="kp-a"
                                                placeholder={ __( 'Title', 'kenzap-features' ) }
                                                value={ item.title }
                                                onChange={ ( value ) => this.onChangePropertyItem( 'title', value, index, true ) }
                                                style={ { ...getTypography( attributes, 0 ) } }
                                            />

                                            <RichText
                                                tagName="p"
                                                placeholder={ __( 'Description', 'kenzap-features' ) }
                                                value={ item.description }
                                                onChange={ ( value ) => this.onChangePropertyItem( 'description', value, index, true ) }
                                                style={ getTypography( attributes, 1 ) }
                                            />

                                        </div>
                                    </div>

                                ) ) }
                                <div style={ { clear: 'both' } } />
                            </div>

                            { attributes.nestedBlocks == 'bottom' && <InnerBlocks /> }
                        </div>
                        <div className="editPadding"/> 
                        <button className="kenzap-add" onClick={ this.addItem }>
                            <Plus />
                            <span/>{ __( 'Add new feature', 'kenzap-features' ) }
                        </button>
                    </ContainerEdit>
                </div>
            </div>
        );
    }
}
