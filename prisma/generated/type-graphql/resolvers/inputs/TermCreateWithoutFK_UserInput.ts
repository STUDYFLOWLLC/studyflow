import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CourseOnTermCreateNestedManyWithoutFK_TermInput } from "../inputs/CourseOnTermCreateNestedManyWithoutFK_TermInput";
import { SchoolCreateNestedOneWithoutTermInput } from "../inputs/SchoolCreateNestedOneWithoutTermInput";
import { TermType } from "../../enums/TermType";

@TypeGraphQL.InputType("TermCreateWithoutFK_UserInput", {
  isAbstract: true
})
export class TermCreateWithoutFK_UserInput {
  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  CreatedTime?: Date | undefined;

  @TypeGraphQL.Field(_type => TermType, {
    nullable: false
  })
  TermType!: "QUARTER" | "TRIMESTER" | "SEMESTER" | "SUMMER";

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  TermName?: string | undefined;

  @TypeGraphQL.Field(_type => SchoolCreateNestedOneWithoutTermInput, {
    nullable: true
  })
  FK_School?: SchoolCreateNestedOneWithoutTermInput | undefined;

  @TypeGraphQL.Field(_type => CourseOnTermCreateNestedManyWithoutFK_TermInput, {
    nullable: true
  })
  FK_CourseOnTerm?: CourseOnTermCreateNestedManyWithoutFK_TermInput | undefined;
}
