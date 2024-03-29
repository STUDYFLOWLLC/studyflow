import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CourseOnTermCreateNestedManyWithoutFK_TermInput } from "../inputs/CourseOnTermCreateNestedManyWithoutFK_TermInput";
import { UserCreateNestedOneWithoutFK_TermsInput } from "../inputs/UserCreateNestedOneWithoutFK_TermsInput";
import { TermType } from "../../enums/TermType";

@TypeGraphQL.InputType("TermCreateWithoutFK_SchoolInput", {
  isAbstract: true
})
export class TermCreateWithoutFK_SchoolInput {
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

  @TypeGraphQL.Field(_type => UserCreateNestedOneWithoutFK_TermsInput, {
    nullable: true
  })
  FK_User?: UserCreateNestedOneWithoutFK_TermsInput | undefined;

  @TypeGraphQL.Field(_type => CourseOnTermCreateNestedManyWithoutFK_TermInput, {
    nullable: true
  })
  FK_CourseOnTerm?: CourseOnTermCreateNestedManyWithoutFK_TermInput | undefined;
}
