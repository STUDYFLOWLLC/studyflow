import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.InputType("SchoolCreateWithoutFK_CourseInput", {
  isAbstract: true
})
export class SchoolCreateWithoutFK_CourseInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  Name!: string;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  HasClassSupport!: boolean;
}
