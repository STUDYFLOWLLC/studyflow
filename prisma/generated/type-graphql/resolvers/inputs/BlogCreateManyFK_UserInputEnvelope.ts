import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BlogCreateManyFK_UserInput } from "../inputs/BlogCreateManyFK_UserInput";

@TypeGraphQL.InputType("BlogCreateManyFK_UserInputEnvelope", {
  isAbstract: true
})
export class BlogCreateManyFK_UserInputEnvelope {
  @TypeGraphQL.Field(_type => [BlogCreateManyFK_UserInput], {
    nullable: false
  })
  data!: BlogCreateManyFK_UserInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
