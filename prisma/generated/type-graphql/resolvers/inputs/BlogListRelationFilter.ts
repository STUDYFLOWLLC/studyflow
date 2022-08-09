import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BlogWhereInput } from "../inputs/BlogWhereInput";

@TypeGraphQL.InputType("BlogListRelationFilter", {
  isAbstract: true
})
export class BlogListRelationFilter {
  @TypeGraphQL.Field(_type => BlogWhereInput, {
    nullable: true
  })
  every?: BlogWhereInput | undefined;

  @TypeGraphQL.Field(_type => BlogWhereInput, {
    nullable: true
  })
  some?: BlogWhereInput | undefined;

  @TypeGraphQL.Field(_type => BlogWhereInput, {
    nullable: true
  })
  none?: BlogWhereInput | undefined;
}
