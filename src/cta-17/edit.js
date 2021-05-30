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
    state = {
        activeSubBlock: -1,
        showError: false,
    };

    /*
    * Change any property of item
    * @param {string} property - editable field
    * @param {string} value - for field
    * @param {number} index - of items array
    * @param {boolean} withMutation - in some cases we should avoid mutation for force rerender component
    */
    onChangePropertyItem = ( property, value, index, withMutation = false ) => {
        const items = withMutation ? [ ...this.props.attributes.items ] : this.props.attributes.items;
        items[ index ][ property ] = value;//+"";
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
                            max={ 24 }
                            help={ __( 'Number of contact blocks to display.', 'kenzap-cta' ) }
                        />
                            
                        <RangeControl
                            label={ __( 'Avatar size', 'kenzap-cta' ) }
                            value={ attributes.imgSize }
                            onChange={ ( imgSize ) => setAttributes( { imgSize } ) }
                            min={ 50 }
                            max={ 150 }
                        />

                        <RangeControl
                            label={ __( 'Border width', 'kenzap-cta' ) }
                            value={ attributes.borderRadius }
                            onChange={ ( borderRadius ) => setAttributes( { borderRadius } ) }
                            min={ 0 }
                            max={ 10 }
                        />

                    </PanelBody>

                    <PanelColorSettings
                        title={ __( 'Colors', 'kenzap-cta' ) }
                        initialOpen={ false }
                        colorSettings={ [
                            {
                                value: attributes.textColor,
                                onChange: ( value ) => {
                                    return setAttributes( { textColor: value } );
                                },
                                label: __( 'Name', 'kenzap-cta' ),
                            },
                            {
                                value: attributes.textColor2,
                                onChange: ( value ) => {
                                    return setAttributes( { textColor2: value } );
                                },
                                label: __( 'Phone', 'kenzap-cta' ),
                            },
                            {
                                value: attributes.textColor3,
                                onChange: ( value ) => {
                                    return setAttributes( { textColor3: value } );
                                },
                                label: __( 'Email', 'kenzap-cta' ),
                            },
                            {
                                value: attributes.textColor4,
                                onChange: ( value ) => {
                                    return setAttributes( { textColor4: value } );
                                },
                                label: __( 'Border', 'kenzap-cta' ),
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

                                    <p style={ { marginBottom: '5px' } }>{ __( 'Contact image', 'kenzap-cta' ) }</p>
                                    <MediaUpload
                                        onSelect={ ( media ) => {
                                            this.onChangePropertyItem( 'img1', media.sizes['kp_s']?media.sizes['kp_s']['url']:media.url, index, true );
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
                        className={ `kp-team block-${ attributes.blockUniqId } ${ isSelected ? 'selected' : '' } ` }
                        attributes={ attributes }
                        withBackground
                        withPadding
                        >
 
                        <div className="kenzap-container" style={ kenzapContanerStyles }>
                            { attributes.nestedBlocks == 'top' && <InnerBlocks /> }
                            <div class="kenzap-row">

                                { attributes.items && attributes.items.map( ( item, index ) => (

                                    <div class="kenzap-col-4">  
                                        <div class="kp-box">
                                            <div class="kp-img" style={ { width: attributes.imgSize } }>
                                                <MediaUpload
                                                    onSelect={ ( media ) => {
                                                        this.onChangePropertyItem( 'img1', media.sizes['kp_s']?media.sizes['kp_s']['url']:media.url, index, true );
                                                        this.onChangePropertyItem( 'alt1', media.alt, index, true );
                                                    } }
                                                    value={ item.img1 }
                                                    allowedTypes={ [ 'image' ] }
                                                    render={ ( mediaUploadProps ) => (

                                                    <Fragment>
                                                        { item.img1!='none' && <img onClick={ mediaUploadProps.open } src={ uo(item.img1) } style={ { width: attributes.imgSize } } alt={ sanitizeAttr(item.alt1) } /> }
                                                    </Fragment>

                                                    ) }
                                                />   
                                            </div>
                                            <div class="kp-content">
                                                <RichText
                                                    tagName="h3"
                                                    className="kp-h3"
                                                    value={ item.title }
                                                    placeholder={ __( 'Full Name', 'kenzap-cta' ) }
                                                    onChange={ ( value ) => {
                                                        this.onChangePropertyItem( 'title', value, index, true );
                                                    } }
                                                    style={ getTypography( attributes, 0 ) }
                                                    />
                                                <ul>
                                                    <li class="phone">
                                                        <RichText
                                                            tagName="div"
                                                            className="kp-ap"
                                                            value={ item.phone }
                                                            placeholder={ __( 'Phone number', 'kenzap-cta' ) }
                                                            onChange={ ( value ) => {
                                                                this.onChangePropertyItem( 'phone', value, index, true );
                                                            } }
                                                            style={ getTypography( attributes, 1 ) }
                                                            />
                                                    </li>
                                                    <li class="email">
                                                        <RichText
                                                            tagName="div"
                                                            className="kp-ae"
                                                            value={ item.email }
                                                            placeholder={ __( 'Email address', 'kenzap-cta' ) }
                                                            onChange={ ( value ) => {
                                                                this.onChangePropertyItem( 'email', value, index, true );
                                                            } }
                                                            style={ getTypography( attributes, 2 ) }
                                                            />
                                                    </li>
                                                </ul>
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
