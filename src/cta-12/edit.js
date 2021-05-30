const { __ } = wp.i18n;
const { Component, Fragment } = wp.element;
const { RichText, InspectorControls, PanelColorSettings, MediaUpload, InnerBlocks } = wp.editor;
const { RangeControl, PanelBody, ToggleControl, RadioControl, Button } = wp.components;
import { defaultItem, getStyles, typographyArr } from './block';
import { InspectorContainer, ContainerEdit, uo } from '../commonComponents/container/container';
import { TypographyContainer, getTypography } from '../commonComponents/typography/typography';


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

    timerId = 0;

    /**
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

        //add elements to item array
        if(value > items.length){

            this.props.setAttributes( {
                items: [ ...this.props.attributes.items, {
                    ...defaultItem,
                    title: defaultItem.title,
                    description: defaultItem.description,
                    key: 'new ' + new Date().getTime(),
                } ],
            } );
        }

        //remove elements from item array
        if(value < items.length){
    
            if ( items.length === 1 ) {
                this.props.setAttributes( { items: [ defaultItem ] } );
            } else {
                items.splice( items.length-1, 1 );
                this.props.setAttributes( { items: items } );
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

            this.props.setAttributes( { backgroundColor: 'transparent' } );
            this.props.setAttributes( { isFirstLoad: false } );
        }

        return (
            <div>
                <InspectorControls>
                    <PanelBody
                        title={ __( 'General', 'kenzap-cta' ) }
                        initialOpen={ false }
                        >
                              
                        <RadioControl
                            label={ __( 'Orientation', 'kenzap-cta' ) }
                            selected={ attributes.orientation }
                            options={ [
                                { label: __( 'Left', 'kenzap-cta' ), value: 'left' },
                                { label: __( 'Right', 'kenzap-cta' ), value: 'right' },
                            ] }
                            onChange={ ( orientation ) => setAttributes( { orientation } ) }
                        />

                        <RangeControl
                            label={ __( 'Elements', 'kenzap-cta' ) }
                            value={ attributes.elements }
                            onChange={ ( elements ) => {
                                this.updateItems( 'elements', elements );
                            } }
                            min={ 1 }
                            max={ 25 }
                            help={ __( 'Number of questions and answers to display.', 'kenzap-cta' ) }
                        />

                        <RangeControl
                            label={ __( 'Border visibility', 'kenzap-cta' ) }
                            value={ attributes.borderTrans }
                            onChange={ ( borderTrans ) => setAttributes( { borderTrans } ) }
                            min={ 1 }
                            max={ 100 }
                            help={ __( 'Adjust border transparency between elements.', 'kenzap-cta' ) }
                        />

                        <ToggleControl
                            label={ __( 'First open', 'kenzap-cta' ) }
                            checked={ attributes.openFirst }
                            onChange={ ( openFirst ) => setAttributes( { openFirst } ) }
                            help={ __( 'Specify if first question is opened on page load.', 'kenzap-cta' ) }
                        />

                        <p style={ { marginBottom: '5px' } }>{ __( 'Image', 'kenzap-cta' ) }</p>
                        <MediaUpload
                            onSelect={ ( media ) => {

                                setAttributes( { img1: media.sizes['kp_banner']?media.sizes['kp_banner']['url']:media.url, alt1: media.alt } )
                            } }
                            value={ attributes.img1 }
                            allowedTypes={ [ 'image' ] }
                            render={ ( mediaUploadProps ) => (

                            <Fragment>
                                { ( attributes.img1 !== 'none' ) ? (
                                    <Fragment>
                                        <Button
                                            isDefault
                                            onClick={ () => {
                                                setAttributes( { img1: "none", alt1: "image" } )
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
                                                backgroundImage: `url(${ [ attributes.img1 ? (attributes.img1) : '' ] })`,
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

                        <PanelColorSettings
                            title={ __( 'Colors', 'kenzap-cta' ) }
                            initialOpen={ false }
                            colorSettings={ [
                                {
                                    value: attributes.textColor,
                                    onChange: ( value ) => {
                                        return setAttributes( { textColor: value } );
                                    },
                                    label: __( 'Text', 'kenzap-cta' ),
                                },
                                {
                                    value: attributes.textColor2,
                                    onChange: ( value ) => {
                                        return setAttributes( { textColor2: value } );
                                    },
                                    label: __( 'Question', 'kenzap-cta' ),
                                },
                                {
                                    value: attributes.textColor3,
                                    onChange: ( value ) => {
                                        return setAttributes( { textColor3: value } );
                                    },
                                    label: __( 'Border', 'kenzap-cta' ),
                                },
                                {
                                    value: attributes.textColor4,
                                    onChange: ( value ) => {
                                        return setAttributes( { textColor4: value } );
                                    },
                                    label: __( 'Box background', 'kenzap-cta' ),
                                },
                            ] }
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
                    
                <div id={ attributes.anchor } className={ className ? className : '' } style={ vars }>
                    <ContainerEdit
                        className={ `kpinf1 kp-${ attributes.orientation } block-${ attributes.blockUniqId } ${ isSelected ? 'selected' : '' } ` }
                        attributes={ attributes }
                        withBackground
                        withPadding
                        >
 
                        <div className="kenzap-container" style={ kenzapContanerStyles }>
                            { attributes.nestedBlocks == 'top' && <InnerBlocks /> }
                            <div class="info-box">
                                <div class="kp-img" style={ { backgroundImage: 'url('+(attributes.img1)+')' } } ></div>
                                <div class="kp-content">

                                    <RichText
                                        tagName="h2"
                                        className="kp-h2"
                                        value={ attributes.title }
                                        placeholder={ __( 'Question', 'kenzap-cta' ) }
                                        onChange={ ( title ) => setAttributes( { title } ) }
                                        style={ getTypography( attributes, 0 ) }
                                        />

                                    <ul class="accordion">

                                        { attributes.items && attributes.items.map( ( item, index ) => (
                                        <li>
                                            <a class="toggle active" href="#">
                                            
                                            <RichText
                                                tagName="span"
                                                className="kp-sp"
                                                value={ item.title }
                                                placeholder={ __( 'Question', 'kenzap-cta' ) }
                                                onChange={ ( value ) => {
                                                    this.onChangePropertyItem( 'title', value, index, true );
                                                } }
                                                style={ getTypography( attributes, 1 ) }
                                                />

                                            <i class="plus"></i></a>
                                            <div class="inner show" style={ { display: 'block' } }>
                                                <RichText
                                                    tagName="p"
                                                    className="kp-p"
                                                    value={ item.description }
                                                    placeholder={ __( 'Answer', 'kenzap-cta' ) }
                                                    onChange={ ( value ) => {
                                                        this.onChangePropertyItem( 'description', value, index, true );
                                                    } }
                                                    style={ getTypography( attributes, 2 ) }
                                                    />
                                            </div>
                                        </li>
                                        ) ) 
                                        }
                                    </ul>
                                </div>
                            </div>
                            { attributes.nestedBlocks == 'bottom' && <InnerBlocks /> }
                        </div>
                    </ContainerEdit>
                </div>
            </div>
        );
    }
}
