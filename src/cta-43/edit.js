const { __ } = wp.i18n; 
const { Component } = wp.element;
const { RichText, InspectorControls, MediaUpload, InnerBlocks } = wp.editor;
const { RangeControl, PanelBody, Popover, TextControl, ToggleControl } = wp.components;
import { defaultItem, typographyArr, getStyles } from './block';
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
        isButtonPopupVisibleIndex: -1,
        showError: false,
    };

    timerId = 0;

    /**
     * Add a new item to list with default fields
     */
    addItem = () => {
        clearTimeout( this.timerId );
        if ( this.props.attributes.items.length >= 3 ) {
            this.setState( { showError: true } );
            this.timerId = setTimeout( () => {
                this.setState( { showError: false } );
                clearTimeout( this.timerId );
            }, 3000 );
        } else {
            key++;
            this.props.setAttributes( {
                items: [ ...this.props.attributes.items, {
                    ...defaultItem,
                    title: defaultItem.title + ' ' + ( key ),
                    key: 'new ' + new Date().getTime(),
                    iconMediaUrl: window.kenzap_cta_path + 'cta-43/pricing-img-' + Math.round( 1 - 0.5 + ( Math.random() * ( 3 - 1 + 1 ) ) ) + '.png',
                } ],
            } );
        }
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
        if ( ! items[ index ] ) {
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
                    iconMediaUrl: window.kenzap_cta_path + 'cta-43/pricing-img-' + Math.round( 1 - 0.5 + ( Math.random() * ( 3 - 1 + 1 ) ) ) + '.png',

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
                        title={ __( 'General', 'kenzap-pricing' ) }
                        initialOpen={ false }
                    >
                        <RangeControl
                            label={ __( 'Icon Size', 'kenzap-pricing' ) }
                            value={ attributes.iconSize }
                            onChange={ ( iconSize ) => setAttributes( { iconSize } ) }
                            min={ 0 }
                            max={ 200 }
                        />
                        <RangeControl
                            label={ __( 'Featured Table', 'kenzap-pricing' ) }
                            value={ attributes.bestSellerBlock }
                            onChange={ ( bestSellerBlock ) => setAttributes( { bestSellerBlock } ) }
                            min={ 1 }
                            max={ attributes.items.length }
                        />
                        <RangeControl
                            label={ __( 'Table Border Radius', 'kenzap-pricing' ) }
                            value={ attributes.cardBorderRadius }
                            onChange={ ( cardBorderRadius ) => setAttributes( { cardBorderRadius } ) }
                            min={ 0 }
                            max={ 100 }
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
                        withNested
                    />
                </InspectorControls>
                <div className={ `${ className ? className : '' } ` } style={ vars }>
                    <ContainerEdit
                        className={ `kenzap-pricing-1 block-${ attributes.blockUniqId } ${ isSelected ? 'selected' : '' } ` }
                        attributes={ attributes }
                        withBackground
                        withPadding
                    >
                        <div className="kenzap-container" style={ kenzapContanerStyles }>
                            { attributes.nestedBlocks == 'top' && <InnerBlocks /> }
                            <div className="kp-pricing-table">
                                <div className="kenzap-row">
                                { attributes.items && attributes.items.map( ( item, index ) => (
                                    <div
                                        key={ item.key }
                                        className="kenzap-col-4"
                                    >
                                        <button className="remove" onClick={ () => this.removeItem( index ) }>
                                            <span className="dashicons dashicons-no" />
                                        </button>
                                        <div
                                            className={ `pricing-box ${ attributes.bestSellerBlock === index + 1 ? 'best-seller' : '' }` }
                                            style={ {
                                                borderRadius: attributes.cardBorderRadius,
                                            } }
                                        >
                                            <MediaUpload
                                                onSelect={ ( media ) => {
                                                    this.onChangePropertyItem( 'iconMediaId', media.id, index );
                                                    this.onChangePropertyItem( 'iconMediaUrl', media.url, index, true );
                                                } }
                                                value={ item.iconMediaId }
                                                allowedTypes={ [ 'image', 'image/svg+xml' ] }
                                                render={ ( props ) => (
                                                    <img
                                                        src={ item.iconMediaUrl }
                                                        alt={ item.title.replace( /<(?:.|\n)*?>/gm, '' ) }
                                                        onClick={ props.open }
                                                        role="presentation"
                                                        style={ { height: attributes.iconSize } }
                                                    />
                                                ) }
                                            />
                                            <RichText
                                                tagName="h3"
                                                placeholder={ __( 'Title', 'kenzap-pricing' ) }
                                                value={ item.title }
                                                onChange={ ( value ) => this.onChangePropertyItem( 'title', value, index, true ) }
                                                style={ getTypography( attributes, 0 ) }
                                            />
                                            <RichText
                                                tagName="p"
                                                placeholder={ __( 'Description', 'kenzap-pricing' ) }
                                                value={ item.description }
                                                onChange={ ( value ) => this.onChangePropertyItem( 'description', value, index, true ) }
                                                style={ getTypography( attributes, 1 ) }
                                            />
                                            <strong
                                                className="kp-price"
                                                style={ getTypography( attributes, 2 ) }
                                            >
                                                <sup>
                                                    <input
                                                        value={ item.currency }
                                                        onChange={ ( event ) => {
                                                            const value = event.target.value;
                                                            this.onChangePropertyItem( 'currency', value, index, true );
                                                        } }
                                                        placeholder={ __( '$', 'kenzap-pricing' ) }
                                                        style={ {
                                                            width: `${ ( item.currency.length === 0 ? 1 : item.currency.length ) * 20 }px`,
                                                        } }
                                                    />
                                                </sup>
                                                <input
                                                    value={ item.price }
                                                    onChange={ ( event ) => {
                                                        const value = event.target.value;
                                                        this.onChangePropertyItem( 'price', value, index, true );
                                                    } }
                                                    placeholder={ __( '100', 'kenzap-pricing' ) }
                                                    style={ {
                                                        width: `${ ( item.price.length === 0 ? 3 : item.price.length ) * 31 }px`,
                                                    } }
                                                />
                                                <sub>/
                                                    <input
                                                        value={ item.period }
                                                        onChange={ ( event ) => {
                                                            const value = event.target.value;
                                                            this.onChangePropertyItem( 'period', value, index, true );
                                                        } }
                                                        placeholder={ __( 'mo', 'kenzap-pricing' ) }

                                                        style={ {
                                                            width: `${ ( item.period.length === 0 ? 2 : item.period.length ) * 25 }px`,
                                                        } }
                                                    />
                                                </sub>
                                            </strong>
                                            
                                            <RichText
                                                tagName="ul"
                                                placeholder={ __( 'Description' ) }
                                                value={ item.subDescription }
                                                onChange={ ( value ) => this.onChangePropertyItem( 'subDescription', value, index, true ) }
                                                multiline="li"
                                                style={ getTypography( attributes, 3 ) }
                                            />
                                            <a
                                                className="kp-link"
                                                onClick={ () => this.setState( { isButtonPopupVisibleIndex: index } ) }
                                                style={ getTypography( attributes, 4 ) }
                                                rel="noopener noreferrer"
                                            >
                                                <input
                                                    value={ item.buttonText }
                                                    onChange={ ( event ) => {
                                                        const value = event.target.value;
                                                        this.onChangePropertyItem( 'buttonText', value, index, true );
                                                    } }
                                                    style={ {
                                                        width: `${ 15 * item.buttonText.length * 0.7 }px`,
                                                    } }
                                                />
                                            </a>

                                            { this.state.isButtonPopupVisibleIndex === index &&
                                            <Popover
                                                onClickOutside={ () => this.setState( { isButtonPopupVisibleIndex: -1 } ) }
                                                focusOnMount={ false }
                                                className="link-popover"
                                            >
                                                <TextControl
                                                    label={ __( 'Specify Link', 'kenzap-pricing' ) }
                                                    placeholder={ __( 'http://www.example.com' ) }
                                                    value={ item.buttonUrl }
                                                    className="link-text"
                                                    onChange={ ( value ) => {
                                                        this.onChangePropertyItem( 'buttonUrl', value, index, true );
                                                    } }
                                                />
                                                <ToggleControl
                                                    label={ __( 'Settings' ) }
                                                    help={ item.buttonUrlTarget ? __( 'Open link in new window.', 'kenzap-pricing' ) : __( 'Open link in current window', 'kenzap-pricing' ) }
                                                    checked={ item.buttonUrlTarget }
                                                    onChange={ ( value ) => {
                                                        this.onChangePropertyItem( 'buttonUrlTarget', value, index, true );
                                                    } }
                                                />
                                            </Popover>
                                            }
                                        </div>
                                    </div>
                                ) ) }
                                </div>
                            </div>
                            { attributes.nestedBlocks == 'bottom' && <InnerBlocks /> }
                        </div>
                        { this.state.showError && <div className={ 'errorMessage errorShow' }>
                            { __( 'No more than 3 pricing tables are allowed per block.', 'kenzap-pricing' ) }
                        </div>
                        }
                        <div className="editPadding" />
                        <button
                            className="addWhite"
                            onClick={ this.addItem }>
                            <span><Plus /></span>{ __( 'Add new table', 'kenzap-pricing' ) }
                        </button>
                    </ContainerEdit>
                </div>
            </div>
        );
    }
}
