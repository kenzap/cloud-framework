const { __ } = wp.i18n;
const { RangeControl, PanelBody, Toolbar, ToggleControl, IconButton, Button } = wp.components;
const { Component, Fragment } = wp.element;
const { PanelColorSettings, FontSizePicker, AlignmentToolbar, MediaUpload } = wp.editor;

const typoStyles = {};
/**
 * Generate inline typography styles for Rich Text editor
 * @param {Object} attributes - of the block
 * @returns {Node} generated styles
 */
export const getTypography = (attributes, index, type) => {

    // only output inline CSS if option is set. Reduces front-end size
    const item = attributes.typography[index];
    if(item){

        typoStyles[index] = {};

        //text
        if(item["font-size"]) typoStyles[index]["font-size"] = item["font-size"] + "px";
        if(item['font-size-t']>8) typoStyles[index]["--fst"] = item["font-size-t"] + "px";
        if(item['font-size-m']>8) typoStyles[index]["--fsm"] = item["font-size-m"] + "px";
        if(item["text-align"] && item["text-align"]!="-") typoStyles[index]["text-align"] = item["text-align"] + " ";
        if(item["text-transform"] && item["text-transform"]!="-") { typoStyles[index]["text-transform"] = item["text-transform"]=="A" ? "uppercase":item["text-transform"]=="a" ? "capitalize":"lowercase"; }
        if(item["line-height"]) typoStyles[index]["line-height"] = Math.round(((item["line-height"]/item["font-size"])*100))/100 + " ";
        if(item["font-weight"]) typoStyles[index]["font-weight"] = (item["font-weight"] * 100)+" ";
        if(item["letter-spacing"]) typoStyles[index]["letter-spacing"] = ((item["letter-spacing"] - 100)/10) + "px";
        if(item["opacity"]) typoStyles[index]["opacity"] = (item["opacity"] / 100) + " ";
        if(item["margin-top"]) typoStyles[index]["margin-top"] = item["margin-top"] + "px";
        if(item["margin-right"]) typoStyles[index]["margin-right"] = item["margin-right"] + "px";
        if(item["margin-bottom"]) typoStyles[index]["margin-bottom"] = item["margin-bottom"] + "px";
        if(item["margin-left"]) typoStyles[index]["margin-left"] = item["margin-left"] + "px";
        if(item["padding-top"]) typoStyles[index]["padding-top"] = item["padding-top"] + "px";
        if(item["padding-right"]) typoStyles[index]["padding-right"] = item["padding-right"] + "px";
        if(item["padding-bottom"]) typoStyles[index]["padding-bottom"] = item["padding-bottom"] + "px";
        if(item["padding-left"]) typoStyles[index]["padding-left"] = item["padding-left"] + "px";
        if(item["color"] && item["color"]!="-") { typoStyles[index]["--cl"] = item["color"] + " "; typoStyles[index]["color"] = item["color"];  }
        if(item["background-color"]) typoStyles[index]["background-color"] = item["background-color"];
        if(item["text-shadow"] && item["text-shadow"]!="-") { typoStyles[index]["filter"] = `${ `drop-shadow(${ item["shadow-color"] } ${ parseInt(Math.cos(item["shadow-angle"] * Math.PI / 180) * item["shadow-length"]) }px ${ parseInt(Math.sin(item["shadow-angle"] * Math.PI / 180) * item["shadow-length"]) }px ${ item["shadow-blur"] }px)` }`; }

        //button
        if(item["border-radius"]) typoStyles[index]["border-radius"] = item["border-radius"] + "px";
        if(item["border-width"]) typoStyles[index]["border-width"] = item["border-width"] + "px";
        if(item["border-color"]) typoStyles[index]["border-color"] = item["border-color"] + " ";
        if(item["hover-color"]) typoStyles[index]["--hcl"] = item["hover-color"] + " ";
        if(item["hover-border-color"]) typoStyles[index]["--hbrcl"] = item["hover-border-color"] + " ";
        if(item["hover-background-color"]) typoStyles[index]["--hbacl"] = item["hover-background-color"] + " ";

        //icon
        if(item["icon-url"]) if(item["icon-url"] !== "none") typoStyles[index]["--icon"] = 'url('+ item["icon-url"] +')';
        if(item["icon-size"]) { typoStyles[index]["--iconWidth"] = item["icon-size"] + "px"; typoStyles[index]["--iconHeight"] = (item["icon-size"] * item["icon-aspect"]) + "px"; }
        if(item["icon-v"]) { typoStyles[index]["--iconV"] = item["icon-v"] + "px"; }
        if(item["icon-h"]) { typoStyles[index]["--iconH"] = item["icon-h"] + "px"; }

        if(type){
            const temp = {}; temp[type] = typoStyles[index][type];
            return temp;
        }else{
            return typoStyles[index];
        }
    }else{
        return {};
    }
};

export const getTypographyInline = (attributes, index, type) => {

    const temp = getTypography(attributes, index);
    var output = "";
    if(temp) Object.keys(temp).forEach(function (item, key) { output += (item+":"+temp[item]+";"); });

    return output; 
}

/**
 * Implements inspector container
 */
export class TypographyContainer extends Component {

    /**
     * Change any property of typography array.
     * @param {string} property - editable field
     * @param {string} value - for field
     * @param {number} index - of items array
     */
    onChangePropertyTypo = ( property, value, index ) => {
        const typography = this.props.typography;
        const output = [];
        // set defaults for empty keys. Fixes block duplication bug
        [ ...JSON.parse( this.props.typographyArr ) ].forEach(function (item, key) { output[key] = {...item, ...typography[key]}; });
        output[index][property] = value;
        this.props.setAttributes( { typography: output, randomValueT: new Date().getTime() } );
    };

    createLevelControl( targetLevel, selectedLevel, onChange ) {

		return {
			icon: 'editor-textcolor',
			isActive: targetLevel === selectedLevel,
			onClick: () => onChange( targetLevel ),
			subscript: String( targetLevel ),
		};
    }

    /**
     * Calculate icon aspect ratio.
     * CSS image masks needs width and height. Auto does not work. In order not to use 2 RangeControls use this method.
     *
     * The "edit" property must be a valid function.
     * @param {Object} img - image
     */
    iconMeasure = ({target:img}, index) => {

        const ratio = img.offsetHeight/img.offsetWidth;
        this.onChangePropertyTypo( 'icon-aspect', ratio, index );
    }

    render() {

        const {
            typographyArr,
            typography,
        } = this.props;

        if ( typography.length === 0 ) {
            this.props.setAttributes( { typography: [ ...JSON.parse( typographyArr ) ], randomValueT: new Date().getTime() } );
            this.props.typography = JSON.parse( typographyArr );
        }

        return (
            <Fragment>
                <PanelBody
                        title={ __( 'Typography' ) }
                        initialOpen={ false }
                    >
                        { typography && typography.map( ( item, index ) => (

                            <PanelBody
                                title={ item.title }
                                initialOpen={ false }
                                >

                                <FontSizePicker
                                    value={ item['font-size'] }
                                    onChange={ ( value ) => { this.onChangePropertyTypo( 'font-size', value, index ); } }
                                />

                                { item['type'] == 'title' && <RangeControl
                                    label={ __( 'Font size tablet' ) }
                                    value={ item['font-size-t'] }
                                    onChange={ ( value ) => { this.onChangePropertyTypo( 'font-size-t', value, index ); } }
                                    min={ 10 }
                                    max={ 100 }
                                /> }

                                { item['type'] == 'title' && <RangeControl
                                    label={ __( 'Font size mobile' ) }
                                    value={ item['font-size-m'] }
                                    onChange={ ( value ) => { this.onChangePropertyTypo( 'font-size-m', value, index ); } }
                                    min={ 10 }
                                    max={ 100 }
                                /> }

                                { item['text-align'] != '-' && <Fragment>
                                    <p style={ { paddingBottom: '5px' } }>{ __( 'Text alignment' ) }</p>
                                    <AlignmentToolbar
                                        value={ item['text-align'] }
                                        onChange={ ( value ) => { this.onChangePropertyTypo( 'text-align', value, index ); } }
                                    />
                                </Fragment> }

                                <p style={ { paddingBottom: '5px' } }>{ __( 'Transform' ) }</p>
                                <Toolbar controls={ [ 'A', 'a', '_' ].map( ( ic ) => this.createLevelControl( ic, item['text-transform'], ( value ) => { if(item['text-transform']==value) value = ""; this.onChangePropertyTypo( 'text-transform', value, index ); } ) ) } />

                                <RangeControl
                                    label={ __( 'Font weight' ) }
                                    value={ item['font-weight'] }
                                    onChange={ ( value ) => { this.onChangePropertyTypo( 'font-weight', value, index ); } }
                                    min={ 1 }
                                    max={ 8 }
                                />

                                <RangeControl
                                    label={ __( 'Line height' ) }
                                    value={ item['line-height'] }
                                    onChange={ ( value ) => { this.onChangePropertyTypo( 'line-height', value, index ); } }
                                    min={ 1 }
                                    max={ 100 }
                                />

                                <RangeControl
                                    label={ __( 'Letter spacing' ) }
                                    value={ item['letter-spacing'] }
                                    onChange={ ( value ) => { this.onChangePropertyTypo( 'letter-spacing', value, index ); } }
                                    min={ 1 }
                                    max={ 200 }
                                />

                                <RangeControl
                                    label={ __( 'Transparency' ) }
                                    value={ item['opacity'] }
                                    onChange={ ( value ) => { this.onChangePropertyTypo( 'opacity', value, index ); } }
                                    min={ 1 }
                                    max={ 100 }
                                />

                                { item['text-shadow'] != '-' && <ToggleControl
                                    label={ __( 'Text shadow' ) }
                                    checked={ item['text-shadow'] }
                                    onChange={ ( value ) => { if(!item['shadow-color']){ this.onChangePropertyTypo( 'shadow-color', "#333", index ); } if(!item['shadow-length']){ this.onChangePropertyTypo( 'shadow-length', 1, index ); } if(!item['shadow-angle']){ this.onChangePropertyTypo( 'shadow-angle', 0, index ); } if(!item['shadow-blur']){ this.onChangePropertyTypo( 'shadow-blur', 1, index ); } this.onChangePropertyTypo( 'text-shadow', value, index ); } }
                                /> }

                                { item['text-shadow'] && item['text-shadow'] != '-' && <RangeControl
                                    label={ __( 'Shadow length' ) }
                                    value={ item['shadow-length'] }
                                    onChange={ ( value ) => { this.onChangePropertyTypo( 'shadow-length', value, index ); } }
                                    min={ 1 }
                                    max={ 25 }
                                /> }
                            
                                { item['text-shadow'] && item['text-shadow'] != '-' && <RangeControl
                                    label={ __( 'Shadow angle' ) }
                                    value={ item['shadow-angle'] }
                                    onChange={ ( value ) => { this.onChangePropertyTypo( 'shadow-angle', value, index ); } }
                                    min={ 0 }
                                    max={ 359 }
                                /> }

                                { item['text-shadow'] && item['text-shadow'] != '-' && <RangeControl
                                    label={ __( 'Shadow blur' ) }
                                    value={ item['shadow-blur'] }
                                    onChange={ ( value ) => { this.onChangePropertyTypo( 'shadow-blur', value, index ); } }
                                    min={ 0 }
                                    max={ 30 }
                                /> }

                                { item['color'] == '-' && <PanelColorSettings
                                    title={ __( 'Colors' ) }
                                    initialOpen={ false }
                                    colorSettings={ [
                                        {
                                            value: item['shadow-color'],
                                            onChange: ( value ) => {
                                                this.onChangePropertyTypo( 'shadow-color', value, index );
                                            },
                                            label: __( 'Shadow' ),
                                        },
                                    ] }
                                /> }

                                { item['type'] != 'button' && item['color'] != '-' && <PanelColorSettings
                                    title={ item.title + ' ' + __( 'colors' ) }
                                    initialOpen={ false }
                                    colorSettings={ [
                                        {
                                            value: item['color'],
                                            onChange: ( value ) => {
                                                this.onChangePropertyTypo( 'color', value, index );
                                            },
                                            label: __( 'Text' ),
                                        },
                                        {
                                            value: item['background-color'],
                                            onChange: ( value ) => {
                                                this.onChangePropertyTypo( 'background-color', value, index );
                                            },
                                            label: __( 'Background' ),
                                        },
                                        {
                                            value: item['shadow-color'],
                                            onChange: ( value ) => {
                                                this.onChangePropertyTypo( 'shadow-color', value, index );
                                            },
                                            label: __( 'Shadow' ),
                                        },
                                    ] }
                                /> }            

                                {/* BUTTON */}
                                { item['type'] == 'button' && <RangeControl
                                    label={ __( 'Border radius' ) }
                                    value={ item['border-radius'] }
                                    onChange={ ( value ) => { this.onChangePropertyTypo( 'border-radius', value, index ); } }
                                    min={ 0 }
                                    max={ 100 }
                                /> }

                                { item['type'] == 'button' && <RangeControl
                                    label={ __( 'Border width' ) }
                                    value={ item['border-width'] }
                                    onChange={ ( value ) => { this.onChangePropertyTypo( 'border-width', value, index ); } }
                                    min={ 0 }
                                    max={ 10 }
                                /> }

                                {/* BUTTON ICON */}
                                { item['icon'] == 1 && <Fragment>
                                <p style={ { marginBottom: '5px' } }>Icon (svg)&nbsp;</p>
                                <MediaUpload
                                    onSelect={ ( media ) => {   this.onChangePropertyTypo( 'icon-url', media.url, index ); } }
                                    value={ item['icon-url'] }
                                    render={ ( mediaUploadProps ) => (
                                    <Fragment>
                                        { ( item['icon-url'] !== 'none' && item['icon-url'] ) ? (
                                            <Fragment>
                                                <Button
                                                    isDefault
                                                    onClick={ () => { this.onChangePropertyTypo( 'icon-url', "none", index ); } }
                                                >
                                                { __( 'Remove' ) }
                                                </Button>
                                                <img class="iconMeasure" onLoad={ (e) => this.iconMeasure(e, index) } style={{ margin: '0 0 0px 5px', height: '27px', width: 'auto', }} src={ item['icon-url'] } />

                                            </Fragment>
                                        ) : (
                                            <Button isDefault onClick={ mediaUploadProps.open } style={ { margin: '0 0 8px 0px', } }>
                                                { __( 'Upload/Choose' ) }
                                            </Button>
                                        ) }
                                    </Fragment>

                                    ) }
                                />
                                </Fragment> }

                                { item['icon'] == 1 && (item['icon-url'] !== 'none' && item['icon-url']) && <Fragment>
                                <p style={ { paddingTop: '20px' } }>{ __( 'Icon settings' ) }</p>
                                <IconButton
                                    icon="arrow-up-alt2"
                                    label="Move up"
                                    style={ {
                                        "width": "25%",
                                        "text-align": "center"
                                        ,"margin": "0px auto 5px"
                                        ,"display": "block"
                                        ,"text-align": "center"
                                        ,"padding": "8px 0"
                                    } }
                                    onClick={ ( ) => { console.log(item['icon-v']); if(!item['icon-v']) item['icon-v'] = 0; this.onChangePropertyTypo( 'icon-v', item['icon-v']-=1, index ); } }
                                />
                                <div style={ { "margin":"0px 0", "display":"flex" } } >
                                    <IconButton
                                        icon="arrow-left-alt2"
                                        label="Move left"
                                        style={ {
                                            "left": "5px",
                                            "float": "left"
                                            ,"text-align": "center"
                                            ,"padding": "8px 0"
                                        } }
                                        onClick={ ( ) => { if(!item['icon-h']) item['icon-h'] = 0; this.onChangePropertyTypo( 'icon-h', item['icon-h']-=1, index ); } }
                                    />

                                    <input
                                        type="number"
                                        min="1"
                                        value={ item['icon-size'] }
                                        onChange={ ( value ) => { this.onChangePropertyTypo( 'icon-size', value.target.value, index ); } }
                                        style={ {
                                            "padding": "20px auto",
                                            "width": "25%",
                                            "height": "36px",
                                            "text-align": "center"
                                            ,"margin": "0 auto"
                                            ,"display": "block"
                                            ,"text-align": "center"
                                        } }
                                    />

                                    <IconButton
                                        icon="arrow-right-alt2"
                                        label="Move right"
                                        style={ {
                                            "right": "5px",
                                            "float": "right"
                                            ,"text-align": "center"
                                            ,"padding": "8px 0"
                                        } }
                                        onClick={ ( ) => { if(!item['icon-h']) item['icon-h'] = 0; this.onChangePropertyTypo( 'icon-h', item['icon-h']+=1, index ); } }
                                    />
                                </div>
                                <IconButton
                                    icon="arrow-down-alt2"
                                    label="Move down"
                                    style={ {
                                        "width": "25%",
                                        "text-align": "center"
                                        ,"margin": "5px auto 0px"
                                        ,"display": "block"
                                        ,"text-align": "center"
                                        ,"clear": "both"
                                        ,"padding": "8px 0"
                                    } }
                                    onClick={ ( ) => { if(!item['icon-v']) item['icon-v'] = 0; this.onChangePropertyTypo( 'icon-v', item['icon-v']+=1, index ); } }

                                /> </Fragment> }

                                { item['type'] == 'button' && <PanelColorSettings
                                    title={ item.title + ' ' + __( 'colors' ) }
                                    initialOpen={ false }
                                    colorSettings={ [
                                        {
                                            value: item['color'],
                                            onChange: ( value ) => {
                                                this.onChangePropertyTypo( 'color', value, index );
                                            },
                                            label: __( 'Text' ),
                                        },
                                        {
                                            value: item['background-color'],
                                            onChange: ( value ) => {
                                                this.onChangePropertyTypo( 'background-color', value, index );
                                            },
                                            label: __( 'Background' ),
                                        },
                                        {
                                            value: item['border-color'],
                                            onChange: ( value ) => {
                                                this.onChangePropertyTypo( 'border-color', value, index );
                                            },
                                            label: __( 'Border' ),
                                        },
                                    ] }
                                /> }

                                { item['type'] == 'button' && <PanelColorSettings
                                    title={ item.title + ' ' + __( 'hover colors' ) }
                                    initialOpen={ false }
                                    colorSettings={ [
                                        {
                                            value: item['hover-color'],
                                            onChange: ( value ) => {
                                                this.onChangePropertyTypo( 'hover-color', value, index );
                                            },
                                            label: __( 'Text' ),
                                        },
                                        {
                                            value: item['hover-background-color'],
                                            onChange: ( value ) => {
                                                this.onChangePropertyTypo( 'hover-background-color', value, index );
                                            },
                                            label: __( 'Background' ),
                                        },
                                        {
                                            value: item['hover-border-color'],
                                            onChange: ( value ) => {
                                                this.onChangePropertyTypo( 'hover-border-color', value, index );
                                            },
                                            label: __( 'Border' ),
                                        },
                                    ] }
                                /> }

                                <PanelBody
                                    title={ item.title + ' ' + __( 'margins' ) }
                                    initialOpen={ false }
                                    >

                                    <Fragment>
                                        <input
                                            type="number"
                                            value={ item['margin-top'] }
                                            onChange={ ( value ) => { this.onChangePropertyTypo( 'margin-top', value.target.value, index ); } }
                                            style={ {
                                                "width": "25%"
                                                ,"text-align": "center"
                                                ,"margin": "0 auto"
                                                ,"display": "block"
                                                ,"text-align": "center"
                                                ,"padding": "8px 0"
                                            } }
                                        />

                                        <div style={ { "margin":"10px 0" } } >
                                            <input
                                                type="number"
                                                value={ item['margin-left'] }
                                                onChange={ ( value ) => { this.onChangePropertyTypo( 'margin-left', value.target.value, index ); } }
                                                style={ {
                                                    "width": "25%"
                                                    ,"float": "left"
                                                    ,"text-align": "center"
                                                    ,"padding": "8px 0"
                                                } }
                                            />

                                            <input
                                                type="number"
                                                value={ item['margin-right'] }
                                                onChange={ ( value ) => { this.onChangePropertyTypo( 'margin-right', value.target.value, index ); } }
                                                style={ {
                                                    "width": "25%"
                                                    ,"float": "right"
                                                    ,"text-align": "center"
                                                    ,"padding": "8px 0"
                                                } }
                                            />
                                        </div>

                                        <input
                                            type="number"
                                            value={ item['margin-bottom'] }
                                            onChange={ ( value ) => { this.onChangePropertyTypo( 'margin-bottom', value.target.value, index ); } }
                                            style={ {
                                                "width": "25%"
                                                ,"text-align": "center"
                                                ,"margin": "0 auto"
                                                ,"display": "block"
                                                ,"text-align": "center"
                                                ,"clear": "both"
                                                ,"padding": "8px 0"
                                            } }
                                        />
                                    </Fragment>

                                </PanelBody>

                                <PanelBody
                                    title={ item.title + ' ' + __( 'paddings' ) }
                                    initialOpen={ false }
                                    >

                                    <Fragment>
                                        <input
                                            type="number"
                                            value={ item['padding-top'] }
                                            onChange={ ( value ) => { this.onChangePropertyTypo( 'padding-top', value.target.value, index ); } }
                                            style={ {
                                                "width": "25%"
                                                ,"text-align": "center"
                                                ,"margin": "0 auto"
                                                ,"display": "block"
                                                ,"text-align": "center"
                                                ,"padding": "8px 0"
                                            } }
                                        />

                                        <div style={ { "margin":"10px 0" } } >
                                            <input
                                                type="number"
                                                value={ item['padding-left'] }
                                                onChange={ ( value ) => { this.onChangePropertyTypo( 'padding-left', value.target.value, index ); } }
                                                style={ {
                                                    "width": "25%"
                                                    ,"float": "left"
                                                    ,"text-align": "center"
                                                    ,"padding": "8px 0"
                                                } }
                                            />

                                            <input
                                                type="number"
                                                value={ item['padding-right'] }
                                                onChange={ ( value ) => { this.onChangePropertyTypo( 'padding-right', value.target.value, index ); } }
                                                style={ {
                                                    "width": "25%"
                                                    ,"float": "right"
                                                    ,"text-align": "center"
                                                    ,"padding": "8px 0"
                                                } }
                                            />
                                        </div>

                                        <input
                                            type="number"
                                            value={ item['padding-bottom'] }
                                            onChange={ ( value ) => { this.onChangePropertyTypo( 'padding-bottom', value.target.value, index ); } }
                                            style={ {
                                                "width": "25%"
                                                ,"text-align": "center"
                                                ,"margin": "0 auto"
                                                ,"display": "block"
                                                ,"text-align": "center"
                                                ,"clear": "both"
                                                ,"padding": "8px 0"
                                            } }
                                        />
                                    </Fragment>

                                </PanelBody>

                            </PanelBody>

                        ) ) }

                    </PanelBody>
            </Fragment>
        );
    }
}