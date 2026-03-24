import MDXComponents from '@theme-original/MDXComponents';
import type {MDXComponentsObject} from '@theme/MDXComponents';
import Card from '@site/src/components/Card';
import CardGrid from '@site/src/components/CardGrid';
import Callout from '@site/src/components/Callout';
import Steps from '@site/src/components/Steps';
import Badge from '@site/src/components/Badge';

export default {
  ...MDXComponents,
  Card,
  CardGrid,
  Callout,
  Steps,
  Badge,
} satisfies MDXComponentsObject;
