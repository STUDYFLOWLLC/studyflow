import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SchoolCreateWithoutFK_CourseInput } from "../inputs/SchoolCreateWithoutFK_CourseInput";
import { SchoolUpdateWithoutFK_CourseInput } from "../inputs/SchoolUpdateWithoutFK_CourseInput";

@TypeGraphQL.InputType("SchoolUpsertWithoutFK_CourseInput", {
  isAbstract: true
})
export class SchoolUpsertWithoutFK_CourseInput {
  @TypeGraphQL.Field(_type => SchoolUpdateWithoutFK_CourseInput, {
    nullable: false
  })
  update!: SchoolUpdateWithoutFK_CourseInput;

  @TypeGraphQL.Field(_type => SchoolCreateWithoutFK_CourseInput, {
    nullable: false
  })
  create!: SchoolCreateWithoutFK_CourseInput;
}
