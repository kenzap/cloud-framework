const { __ } = wp.i18n;
const { Component, Fragment } = wp.element;
const { RichText, InspectorControls, PanelColorSettings, MediaUpload, InnerBlocks } = wp.editor;
const { RangeControl, PanelBody, Button } = wp.components;
import { defaultSubBlocks, typographyArr, getStyles } from './block';
import { InspectorContainer, ContainerEdit, uo } from '../commonComponents/container/container';
import { TypographyContainer, getTypography } from '../commonComponents/typography/typography';
import { sanitizeAttr } from '../commonComponents/helpers/helpers';

/**
 * The edit function describes the structure of your block in the context of the editor.
 * This represents what the editor will render when the block is used.
 *
 * The "edit" property must be a valid function.
 * @param {Object} props - attributes
 * @returns {Node} rendered component
 */
export default class Edit extends Component {

    /*
    * Change any property of item
    * @param {string} property - editable field
    * @param {string} value - for field
    * @param {number} index - of items array
    * @param {boolean} withMutation - in some cases we should avoid mutation for force rerender component
    */
    onChangePropertyItem = ( property, value, index, withMutation = false ) => {
        const items = withMutation ? [ ...this.props.attributes.items ] : this.props.attributes.items;
        items[ index ][ property ] = value+"";
        this.props.setAttributes( { items: items } );
        this.props.setAttributes( { randomValue: new Date().getTime()+"" } );
    };

    /**
     * Change any property of item
     * @param {string} el - key of items attributes array
     * @param {string} value -  value of editable field
     */
    updateItems = ( el, value ) => {

        const items = [ ...this.props.attributes.items ];
        let itemsT = items; 
        let itemsD = JSON.parse( defaultSubBlocks );

        //add elements to item array
        if(value > items.length){

            var i = items.length;
            while(value>i){

                itemsT = [ ...itemsT, {
                    ...itemsD[Math.floor(Math.random() * Math.floor(itemsD.length))],
                    key: 'new ' + new Date().getTime(),
                } ];

                i++;
            }
            this.props.setAttributes( { items: itemsT } );
        }

        //remove elements from item array
        if(value < items.length){
    
            if ( items.length === 1 ) {
                this.props.setAttributes( { items: itemsD[Math.floor(Math.random() * Math.floor(itemsD.length))] } );
            } else {
                var titems = items.slice( 0, value );
                this.props.setAttributes( { items: titems } );
            }
        }

        this.props.setAttributes( { "elements": value } );
    };

    render() {
        const {
            className,
            attributes,
            setAttributes,
            isSelected,
        } = this.props;

        const { vars, kenzapContanerStyles } = getStyles( attributes );
 
        if(attributes.isFirstLoad){

            this.props.setAttributes( { backgroundColor: '#fff' } );
            this.props.setAttributes( { isFirstLoad: false } );
        }

        return (
            <div>
                <InspectorControls>
                    <PanelBody
                        title={ __( 'General', 'kenzap-cta' ) }
                        initialOpen={ false }
                        >

                        <RangeControl
                            label={ __( 'Elements', 'kenzap-cta' ) }
                            value={ attributes.elements }
                            onChange={ ( elements ) => {
                                this.updateItems( 'elements', elements );
                            } }
                            min={ 1 }
                            max={ 25 }
                            help={ __( 'Number of address blocks to display.', 'kenzap-cta' ) }
                        />

                        <RangeControl
                            label={ __( 'Border radius', 'kenzap-cta' ) }
                            value={ attributes.borderRadius }
                            onChange={ ( borderRadius ) => setAttributes( { borderRadius } ) }
                            min={ 0 }
                            max={ 100 }
                        />

                        <RangeControl
                            label={ __( 'Overlay opacity', 'kenzap-cta' ) }
                            value={ attributes.opacity }
                            onChange={ ( opacity ) => setAttributes( { opacity } ) }
                            min={ 0 }
                            max={ 100 }
                        />

                    </PanelBody>

                    <PanelColorSettings
                        title={ __( 'Colors', 'kenzap-cta' ) }
                        initialOpen={ false }
                        colorSettings={ [
                            {
                                value: attributes.textColor2,
                                onChange: ( value ) => {
                                    return setAttributes( { textColor2: value } );
                                },
                                label: __( 'Overlay', 'kenzap-cta' ),
                            },
                            {
                                value: attributes.textColor3,
                                onChange: ( value ) => {
                                    return setAttributes( { textColor3: value } );
                                },
                                label: __( 'Overlay hover', 'kenzap-cta' ),
                            },
                        ] }
                    />

                    <PanelBody
                        title={ __( 'Images', 'kenzap-cta' ) }
                        initialOpen={ true }
                        >
                        
                            { attributes.items && attributes.items.map( ( item, index ) => (

                                <PanelBody
                                    title={ (index+1 ) + ". " +  __( 'Image', 'kenzap-cta' ) }
                                    initialOpen={ false }
                                    >

                                    <p style={ { marginBottom: '5px' } }>{ __( 'Background image', 'kenzap-cta' ) }</p>
                                    <MediaUpload
                                        onSelect={ ( media ) => {
                                            this.onChangePropertyItem( 'img1', media.sizes['kp_l']?media.sizes['kp_l']['url']:media.url, index, true );
                                            this.onChangePropertyItem( 'alt1', media.alt, index, true );
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
                                                            backgroundImage: `url(${ [ item.img1 ? uo(item.img1) : '' ] })`,
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
                    
                <div id={ attributes.anchor } className={ className ? className : '' } style={ vars } >
                    <ContainerEdit
                        className={ `kpcoff block-${ attributes.blockUniqId } ${ isSelected ? 'selected' : '' } ` }
                        attributes={ attributes }
                        withBackground
                        withPadding
                        >
 
                        <div className="kenzap-container" style={ kenzapContanerStyles }>
                            { attributes.nestedBlocks == 'top' && <InnerBlocks /> }
                            <div class="kenzap-row">

                                { attributes.items && attributes.items.map( ( item, index ) => (

                                <div class="kenzap-col-6">
                                    <div class="contact-box">
                                        <div class="kp-img">
                                            { item.img1!='none' && <img src={ uo(item.img1) }  alt={ sanitizeAttr(item.alt1) } /> }
                                        </div>
                                        <div class="kp-content">
                                            <div class="kp-a">
                                                <div>
                                                <RichText
                                                    tagName="div"
                                                    className="kp-addr"
                                                    value={ item.title }
                                                    placeholder={ __( 'Address', 'kenzap-cta' ) }
                                                    onChange={ ( value ) => {
                                                        this.onChangePropertyItem( 'title', value, index, true );
                                                    } }
                                                    style={ getTypography( attributes, 0 ) }
                                                    />
                                                <RichText
                                                    tagName="address"
                                                    className="kp-addr"
                                                    value={ item.address }
                                                    placeholder={ __( 'Address', 'kenzap-cta' ) }
                                                    onChange={ ( value ) => {
                                                        this.onChangePropertyItem( 'address', value, index, true );
                                                    } }
                                                    style={ getTypography( attributes, 1 ) }
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                ) ) }

                            </div>
                            { attributes.nestedBlocks == 'bottom' && <InnerBlocks /> }
                        </div>
                    </ContainerEdit>
                </div>
            </div>
        );
    }
}
