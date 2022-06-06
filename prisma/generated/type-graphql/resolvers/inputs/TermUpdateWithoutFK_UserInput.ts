import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CourseOnTermUpdateManyWithoutFK_TermInput } from "../inputs/CourseOnTermUpdateManyWithoutFK_TermInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { EnumTermTypeFieldUpdateOperationsInput } from "../inputs/EnumTermTypeFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { SchoolUpdateOneWithoutTermInput } from "../inputs/SchoolUpdateOneWithoutTermInput";

@TypeGraphQL.InputType("TermUpdateWithoutFK_UserInput", {
  isAbstract: true
})
export class TermUpdateWithoutFK_UserInput {
  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  CreatedTime?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => EnumTermTypeFieldUpdateOperationsInput, {
    nullable: true
  })
  TermType?: EnumTermTypeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  TermName?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => SchoolUpdateOneWithoutTermInput, {
    nullable: true
  })
  FK_School?: SchoolUpdateOneWithoutTermInput | undefined;

  @TypeGraphQL.Field(_type => CourseOnTermUpdateManyWithoutFK_TermInput, {
    nullable: true
  })
  FK_CourseOnTerm?: CourseOnTermUpdateManyWithoutFK_TermInput | undefined;
}
