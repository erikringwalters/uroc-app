export interface IKeyedCollection<T> {
  Add(key: string, value: T);
  ContainsKey(key: string): boolean;
  Count(): number;
  Item(key: string): T;
  Keys(): string[];
  Remove(key: string): T;
  Values(): T[];
}

export class KeyedCollection<T> implements IKeyedCollection<T> {
  private items: { [index: string]: T } = {};
  private count = 0;

  /*
    useage example:
      this.imageSets = new KeyedCollection<ImageSet>();
      this.imageSets.Add('product', new ImageSet('productSet'));
      this.imageSets.Add('sample', new ImageSet('sampleSet')); // note: Add will replace if key exists

      let productImageSet = this.imageSets.item('product');
      let allImageSets: ImageSet[] = this.imageSets.Values();
      let allImageSetKeys: string[] = this.imageSets.Keys();

  */

  public static fromParsedJson<T>(parsedJson: any): KeyedCollection<T> {
    // parsedJson is the object: any that comes from a stringified keyedCollection
    let kCollection = new  KeyedCollection<T>();
    if (!parsedJson) return kCollection;

    let items = parsedJson.items;
    Object.keys(items).forEach(
      key => {
        let item = items[key];
        kCollection.Add(key, item);
      });
    return kCollection;
  }


  public static fromJson<T>(json: string): KeyedCollection<T> {
    let object: any = JSON.parse(json);
    return this.fromParsedJson<T>(object);
  }


  public ContainsKey(key: string): boolean {
    return this.items.hasOwnProperty(key);
  }

  public Count(): number {
    return this.count;
  }

  public Add(key: string, value: T) {
    if (!this.items.hasOwnProperty(key)) {
      this.count++;
    }


    this.items[key] = value;
  }

  public Remove(key: string): T {
    const val = this.items[key];
    delete this.items[key];
    this.count--;
    return val;
  }

  public Item(key: string): T {
    return this.items[key];
  }

  public Keys(): string[] {
    const keySet: string[] = [];

    for (const prop in this.items) {
      if (this.items.hasOwnProperty(prop)) {
        keySet.push(prop);
      }
    }

    return keySet;
  }

  public Values(): T[] {
    const values: T[] = [];

    for (const prop in this.items) {
      if (this.items.hasOwnProperty(prop)) {
        values.push(this.items[prop]);
      }
    }

    return values;
  }


}




