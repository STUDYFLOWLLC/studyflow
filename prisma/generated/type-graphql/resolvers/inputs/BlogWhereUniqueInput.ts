import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.InputType("BlogWhereUniqueInput", {
  isAbstract: true
})
export class BlogWhereUniqueInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  BlogID?: string | undefined;
}
