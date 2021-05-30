const { __ } = wp.i18n;
const { Component, Fragment } = wp.element;
const { MediaUpload, RichText, InspectorControls, PanelColorSettings, InnerBlocks } = wp.editor;
const { RangeControl, PanelBody, CheckboxControl, TextControl, ToggleControl, Button} = wp.components;
import { defaultItem, typographyArr, getStyles } from './block';
import { Plus } from '../commonComponents/icons/plus';
import { TypographyContainer, getTypography } from '../commonComponents/typography/typography';

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
        } = this.props;

        const {
            featuredImg,
            title,
            description,
            container,
        } = getStyles( attributes );

        return (
            <div className={ className }>
                <InspectorControls>
                    <PanelBody
                        title={ __( 'General', 'kenzap-pricing' ) }
                        initialOpen={ false }
                    >
                        <RangeControl
                            label={ __( 'Icons size', 'kenzap-features' ) }
                            value={ attributes.iconSize }
                            onChange={ ( iconSize ) => setAttributes( { iconSize } ) }
                            min={ 30 }
                            max={ 130 }
                        />

                        <CheckboxControl
                            label={ __( 'Hover effect', 'kenzap-features' ) }
                            checked={ attributes.isHoverEnabled }
                            onChange={ ( isChecked ) => {
                                setAttributes( { isHoverEnabled: isChecked } );
                            } }
                        />

                        <CheckboxControl
                            label={ __( 'CTA Buttons', 'kenzap-features' ) }
                            checked={ attributes.cta }
                            onChange={ ( cta ) => {
                                setAttributes( { cta: cta } );
                            } }
                        />

                    </PanelBody>

                    <PanelBody
                        title={ __( 'Colors', 'kenzap-pricing' ) }
                        initialOpen={ false }
                    >

                        <PanelColorSettings
                            title={ __( '- Default', 'kenzap-features' ) }
                            initialOpen={ false }
                            colorSettings={ [
                                {
                                    value: attributes.iconColor,
                                    onChange: ( value ) => {
                                        setAttributes( { iconColor: value } );
                                    },
                                    label: __( 'Icon ', 'kenzap-features' ),
                                },
                            ] }
                        />

                        { attributes.isHoverEnabled && (
                            <PanelColorSettings
                                title={ __( '- Hover', 'kenzap-features' ) }
                                initialOpen={ false }
                                colorSettings={ [
                                    {
                                        value: attributes.backgroundColorOnHover,
                                        onChange: ( value ) => {
                                            setAttributes( { backgroundColorOnHover: value } );
                                        },
                                        label: __( 'Background ', 'kenzap-features' ),
                                    },
                                    {
                                        value: attributes.iconColorOnHover,
                                        onChange: ( value ) => {
                                            setAttributes( { iconColorOnHover: value } );
                                        },
                                        label: __( 'Icon', 'kenzap-features' ),
                                    },
                                    {
                                        value: attributes.titleColorOnHover,
                                        onChange: ( value ) => {
                                            setAttributes( { titleColorOnHover: value } );
                                        },
                                        label: __( 'Title', 'kenzap-features' ),
                                    },
                                    {
                                        value: attributes.descriptionColorOnHover,
                                        onChange: ( value ) => {
                                            setAttributes( { descriptionColorOnHover: value } );
                                        },
                                        label: __( 'Description', 'kenzap-features' ),
                                    },
                                ] }
                            />
                        ) }

                        <CheckboxControl
                            label={ __( 'Original Icon Color', 'kenzap-features' ) }
                            checked={ attributes.oic }
                            onChange={ ( oic ) => {
                                setAttributes( { oic: oic } );
                            } }
                        />
                        
                    </PanelBody>

                    { attributes.cta && (<PanelBody
                        title={ __( 'Buttons', 'kenzap-cta' ) }
                        initialOpen={ true }
                        >
                        
                            { attributes.items && attributes.items.map( ( item, index ) => (

                                <PanelBody
                                    title={ (index+1 ) + ". " +  __( 'Button', 'kenzap-cta' ) }
                                    initialOpen={ false }
                                    >

                                    <TextControl
                                        label={ __( 'Link', 'kenzap-cta' ) + " " + (index+1) }
                                        value={ item.link }
                                        onChange={ ( value ) => {
                                            this.onChangePropertyItem( 'link', value, index, true );
                                        } }
                                    />

                                    <ToggleControl
                                        label={ __( 'New window', 'kenzap-cta' ) }
                                        checked={ JSON.parse(item.linkn) }
                                        onChange={ ( value ) => {
                                            this.onChangePropertyItem( 'linkn', value, index, true );
                                        } }
                                    />

                                    <TextControl
                                        label={ __( 'Button text', 'kenzap-cta' ) + " " + (index+1) }
                                        value={ item.btn }
                                        onChange={ ( value ) => {
                                            this.onChangePropertyItem( 'btn', value, index, true );
                                        } }
                                    />

                                    <p style={ { marginBottom: '5px' } }>{ __( 'Icon', 'kenzap-cta' ) }</p>
                                    <MediaUpload
                                        onSelect={ ( media ) => {
                                            this.onChangePropertyItem( 'img1', media.url, index, true );
                                            this.onChangePropertyItem( 'alt', media.alt, index, true );
                                        } }
                                        value={ item.img1 }
                                        allowedTypes={ [ 'image' ] }
                                        render={ ( mediaUploadProps ) => (

                                        <Fragment>
                                            { ( item.img1 !== 'none' ) ? (
                                                <Fragment>
                                                    <Button
                                                        isDefault
                                                        onClick={ () => { 
                                                            this.onChangePropertyItem( 'img1', 'none', index, true ); 
                                                        } }
                                                    >
                                                    { __( 'Remove', 'kenzap-cta' ) }
                                                    </Button>
                                                    <div
                                                        style={ {
                                                            width: '27px',
                                                            height: '27px',
                                                            display: 'inline-block',
                                                            margin: '0 0 8px 5px',
                                                            backgroundImage: `url(${ [ item.img1 ? (item.img1) : '' ] })`,
                                                            backgroundRepeat: 'no-repeat',
                                                            backgroundSize: 'cover',
                                                        } }
                                                    />

                                                </Fragment>
                                            ) : (
                                                <Button isDefault onClick={ mediaUploadProps.open } style={ { margin: '0 0 8px 0px', } }>
                                                    { __( 'Upload/Choose', 'kenzap-cta' ) }
                                                </Button>
                                            ) }
                                        </Fragment>

                                        ) }
                                    />

                                </PanelBody>

                            ) ) }

                    </PanelBody>) }

                    <TypographyContainer
                        setAttributes={ setAttributes }
                        typographyArr={ typographyArr }
                        { ...attributes }
                    />

                </InspectorControls>
                <div
                    className={ `kfl1 ${ attributes.isHoverEnabled ? 'hover-enabled' : '' } ${ className ? className : '' }` }
                    style={ { ...container } }
                >
                    { attributes.nestedBlocks == 'top' && <InnerBlocks /> }
                    { attributes.items && attributes.items.map( ( item, index ) => (
                        <div
                            key={ item.key }
                            className="featured-box"
                        >
                            <button
                                className="remove" onClick={ () => this.removeItem( index ) }>
                                <span className="dashicons dashicons-no" />
                            </button>
                            <div className="featured-img">
                                { item.iconMediaUrl ? (
                                    <MediaUpload
                                        onSelect={ ( media ) => {
                                    this.onChangePropertyItem( 'iconMediaId', media.id, index );
                                    this.onChangePropertyItem( 'iconMediaUrl', media.url, index, true );
                                } }
                                    value={ item.iconMediaId }
                                    //allowedTypes={ [ 'image', 'image/svg+xml' ] }
                                    render={ ( props ) => (
                                        !attributes.oic ? 
                                        ( <div
                                            className="kp-img"
                                            style={ {
                                                cursor: 'pointer',
                                                position: 'relative',
                                                zIndex: 10,
                                                height: attributes.iconSize,
                                                "--icon":"url(" + item.iconMediaUrl + ")",
                                            } }
                                            onClick={ props.open }
                                            role="presentation" />
                                        ):( <img
                                                src={ (item.iconMediaUrl) }
                                                alt={ item.title.replace( /<(?:.|\n)*?>/gm, '' ) }
                                                style={ { ...featuredImg, cursor: 'pointer' } }
                                                onClick={ props.open }
                                                role="presentation"
                                        /> )
                                    ) }
                                />
                                ) : (
                                    <div
                                        className="addIcon"
                                        style={ featuredImg }
                                    >
                                        <MediaUpload
                                            onSelect={ ( media ) => {
                                                this.onChangePropertyItem( 'iconMediaId', media.id, index );
                                                this.onChangePropertyItem( 'iconMediaUrl', media.url, index, true );
                                            } }
                                            value={ item.iconMediaId }
                                            //allowedTypes={ [ 'image', 'image/svg+xml' ] }
                                            render={ ( props ) => (
                                                <button onClick={ props.open }>
                                                    { __( 'Upload/Choose icon', 'kenzap-features' ) }
                                                </button>
                                            ) }
                                        />
                                    </div>
                                ) }
                            </div>
                            <RichText
                                tagName="h3"
                                placeholder={ __( 'Title', 'kenzap-features' ) }
                                value={ item.title }
                                onChange={ ( value ) => this.onChangePropertyItem( 'title', value, index, true ) }
                                onSplit={ () => null }
                                style={ getTypography( attributes, 0 ) }
                            />
                            <RichText
                                tagName="ul"
                                placeholder={ __( 'Description', 'kenzap-features' ) }
                                value={ item.description }
                                onChange={ ( value ) => this.onChangePropertyItem( 'description', value, index, true ) }
                                multiline="li"
                                style={ getTypography( attributes, 1 ) }
                                onSplit={ () => null }
                            />
                            { item.btn && attributes.cta && <a 
                                target={ item.linkn ? '_blank':'_self' }
                                className="bt1"
                                style={ getTypography( attributes, 2 ) }
                                rel="noopener noreferrer"
                                href={ item.link } >{ item.btn }</a> 
                            }
                        </div>
                    ) ) }
                    { attributes.nestedBlocks == 'bottom' && <InnerBlocks /> }
                </div>
                <div className="editPadding"/> 
                <button className="kenzap-add" onClick={ this.addItem }>
                    <Plus />
                    <span/>{ __( 'Add new feature', 'kenzap-features' ) }
                </button>
            </div>
        );
    }
}
