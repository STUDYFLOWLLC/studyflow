import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SchoolCreateWithoutFK_CourseInput } from "../inputs/SchoolCreateWithoutFK_CourseInput";
import { SchoolWhereUniqueInput } from "../inputs/SchoolWhereUniqueInput";

@TypeGraphQL.InputType("SchoolCreateOrConnectWithoutFK_CourseInput", {
  isAbstract: true
})
export class SchoolCreateOrConnectWithoutFK_CourseInput {
  @TypeGraphQL.Field(_type => SchoolWhereUniqueInput, {
    nullable: false
  })
  where!: SchoolWhereUniqueInput;

  @TypeGraphQL.Field(_type => SchoolCreateWithoutFK_CourseInput, {
    nullable: false
  })
  create!: SchoolCreateWithoutFK_CourseInput;
}
