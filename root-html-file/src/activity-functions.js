export function prefix(location, ...prefixes) {
    return prefixes.some(
        prefix => location.href.indexOf(`${location.origin}/${prefix}`) !== -1
    );
}

export function nav() {
    // The nav is always active
    return true;
}

export function main(location) {
    return prefix(location, '');
}

export function card1(location) {
    return prefix(location, '');
}

export function card2(location) {
    return prefix(location, '');
}