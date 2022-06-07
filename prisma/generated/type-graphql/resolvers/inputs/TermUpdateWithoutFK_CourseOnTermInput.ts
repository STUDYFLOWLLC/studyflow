import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { EnumTermTypeFieldUpdateOperationsInput } from "../inputs/EnumTermTypeFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { SchoolUpdateOneWithoutTermInput } from "../inputs/SchoolUpdateOneWithoutTermInput";
import { UserUpdateOneWithoutFK_TermsInput } from "../inputs/UserUpdateOneWithoutFK_TermsInput";

@TypeGraphQL.InputType("TermUpdateWithoutFK_CourseOnTermInput", {
  isAbstract: true
})
export class TermUpdateWithoutFK_CourseOnTermInput {
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

  @TypeGraphQL.Field(_type => UserUpdateOneWithoutFK_TermsInput, {
    nullable: true
  })
  FK_User?: UserUpdateOneWithoutFK_TermsInput | undefined;

  @TypeGraphQL.Field(_type => SchoolUpdateOneWithoutTermInput, {
    nullable: true
  })
  FK_School?: SchoolUpdateOneWithoutTermInput | undefined;
}
