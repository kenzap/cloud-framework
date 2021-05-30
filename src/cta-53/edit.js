const { __ } = wp.i18n;
const { Component } = wp.element;
const { InspectorControls, MediaUpload, InnerBlocks } = wp.editor;
const { RangeControl, PanelBody, Popover, TextControl, ToggleControl, Button, RadioControl, SelectControl } = wp.components;
import { defaultItem, getStyles } from './block';
import { InspectorContainer, ContainerEdit } from '../commonComponents/container/container';
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
        popupVisibleIndex: -1,
        activeFilter: '',
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
                key: 'new ' + new Date().getTime(),
                icon: window.kenzap_cta_path + 'images/gallery-img-' + Math.round( 1 - 0.5 + ( Math.random() * ( 10 - 1 + 1 ) ) ) + '.jpg',
            } ],
        } );

        // refresh isotope
        if (typeof kenzapIsotope === 'function') { kenzapIsotope($); }
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
                    icon: window.kenzap_cta_path + 'images/gallery-img-' + Math.round( 1 - 0.5 + ( Math.random() * ( 10 - 1 + 1 ) ) ) + '.jpg',
                } ],
            } );
        } else {
            items.splice( index, 1 );
            this.props.setAttributes( { items: items } );
        }

        // refresh isotope
        if (typeof kenzapIsotope === 'function') { kenzapIsotope($); }
    };

    render() {
        const {
            className,
            attributes,
            setAttributes,
            isSelected,
        } = this.props;

        const { vars, kenzapContanerStyles } = getStyles( attributes );

        const getClass = ( currentIndex ) => {
            const chunks = Object.keys( attributes.items ).reduce( ( resultArray, item, index ) => {
                const chunkIndex = Math.floor( index / 12 );

                if ( ! resultArray[ chunkIndex ] ) {
                    resultArray[ chunkIndex ] = [];
                }

                resultArray[ chunkIndex ].push( item );

                return resultArray;
            }, [] );

            let index = 0;

            for ( let i = 0; i < chunks.length; i++ ) {
                for ( let j = 0; j < chunks[ i ].length; j++ ) {
                    if ( Number( chunks[ i ][ j ] ) === currentIndex ) {
                        index = j;
                        break;
                    }
                }
            }

            if ( index === 3 ) {
                return 'width-22';
            }
            if ( index === 4 ) {
                return 'width-43';
            }
            if ( index === 5 ) {
                return 'width-35';
            }
            if ( index === 6 || index === 8 ) {
                return 'width-40';
            }
            if ( index === 7 ) {
                return 'width-20';
            }
            return '';
        };

        return (
            <div>
                <InspectorControls>
                    <PanelBody
                        title={ __( 'General', 'kenzap-gallery' ) }
                        initialOpen={ true }
                    >
                        <RangeControl
                            label={ __( 'Opacity on hover', 'kenzap-gallery' ) }
                            value={ attributes.overlayOpacity }
                            onChange={ ( overlayOpacity ) => setAttributes( { overlayOpacity } ) }
                            min={ 0 }
                            max={ 100 }
                        />
                    </PanelBody>
                    <InspectorContainer
                        setAttributes={ setAttributes }
                        { ...attributes }
                        withNested
                        withPadding
                        withWidth100
                        withBackground
                        withAutoPadding
                    />
                </InspectorControls>
                <div className={ `${ className ? className : '' } ` } style={ vars }>
                    <ContainerEdit
                        className={ `kenzap-gallery-5 ${ isSelected ? 'selected' : '' } ` }
                        attributes={ attributes }
                        style={ vars }
                        withBackground
                        withPadding
                    >
                        <div className="kenzap-container" style={ kenzapContanerStyles }>
                            { attributes.nestedBlocks == 'top' && <InnerBlocks /> }
                            <div className="kp-list">
                                <div className="grid-sizer" />
                                { attributes.items && attributes.items.map( ( item, index ) => (
                                    <div
                                        className={ `kp-iitem ${ getClass( index ) }` }
                                        key={ item.key }
                                    >
                                        <div className="gallery-box" key={ item.key }>
                                            <button className="remove" onClick={ () => this.removeItem( index ) }>
                                                <span className="dashicons dashicons-no" />
                                            </button>
                                            <div className="kp-img">
                                                <a
                                                    onClick={ () => {
                                                        this.setState( { popupVisibleIndex: index } );
                                                    } }
                                                    style={ {
                                                        backgroundImage: `url(${ item.icon })`,
                                                        cursor: 'pointer',
                                                    } }
                                                />
                                            </div>
                                            { this.state.popupVisibleIndex === index &&
                                            <Popover
                                                focusOnMount={ false }
                                                className="kenzap-gallery-4-link-popover"
                                            >
                                                <span
                                                    onClick={ () => this.setState( { popupVisibleIndex: -1 } ) }
                                                    style={ {
                                                    lineHeight: 1,
                                                    cursor: 'pointer',
                                                    position: 'absolute',
                                                    top: 0,
                                                    right: 0,
                                                } }
                                                    className="dashicons dashicons-no"
                                            />
                                                <div>
                                                    <RadioControl
                                                        label={ __( 'On click action', 'kenzap-gallery' ) }
                                                        selected={ item.action }
                                                        options={ [
                                                            { label: __( 'Enlarge Image', 'kenzap-gallery' ), value: 'enlarge' },
                                                            { label: __( 'Open Link', 'kenzap-gallery' ), value: 'link' },
                                                            { label: __( 'Do Nothing', 'kenzap-gallery' ), value: 'nothing' },
                                                        ] }
                                                        onChange={ ( value ) => {
                                                            this.onChangePropertyItem( 'action', value, index, true );
                                                        } }
                                                    />
                                                    { item.action === 'link' &&
                                                    <div style={ { marginBottom: '5px' } }>
                                                        <TextControl
                                                            label={ __( 'Specify Link', 'kenzap-gallery' ) }
                                                            placeholder={ __( 'http://www.example.com' ) }
                                                            value={ item.link }
                                                            className="link-text"
                                                            onChange={ ( value ) => {
                                                                this.onChangePropertyItem( 'link', value, index, true );
                                                            } }
                                                        />
                                                        <ToggleControl
                                                            label={ __( 'Settings' ) }
                                                            help={ item.linkTarget ? __( 'Open link in new window.', 'kenzap-gallery' ) : __( 'Open link in current window', 'kenzap-gallery' ) }
                                                            checked={ item.linkTarget }
                                                            onChange={ ( value ) => {
                                                                this.onChangePropertyItem( 'linkTarget', value, index, true );
                                                            } }
                                                        />
                                                    </div>
                                                    }
                                                </div>
                                                <div>
                                                    <MediaUpload
                                                        onSelect={ ( media ) => {
                                                            let url = media.sizes['kp_l']?media.sizes['kp_l']['url']:media.url;
                                                            this.onChangePropertyItem( 'iconMediaId', media.id, index );
                                                            this.onChangePropertyItem( 'icon', url, index, true );
                                                            this.onChangePropertyItem( 'iconF', media.url, index, true );
                                                        } }
                                                        value={ item.iconMediaId }
                                                        allowedTypes={ [ 'image', 'image/svg+xml' ] }
                                                        render={ ( props ) => (
                                                            <Button
                                                                isDefault
                                                                onClick={ props.open }
                                                            >
                                                                { __( 'Change image', 'kenzap-gallery' ) }
                                                            </Button>
                                                        ) }
                                                    />
                                                </div>
                                            </Popover>
                                            }
                                        </div>
                                    </div>
                                ) ) }
                            </div>
                            { attributes.nestedBlocks == 'bottom' && <InnerBlocks /> }
                        </div>
                        <div className="editPadding" />
                        <button
                            className="addWhite"
                            onClick={ this.addItem }>
                            <span><Plus /></span>{ __( 'Add new image', 'kenzap-gallery' ) }
                        </button>
                    </ContainerEdit>
                </div>
            </div>
        );
    }
}
