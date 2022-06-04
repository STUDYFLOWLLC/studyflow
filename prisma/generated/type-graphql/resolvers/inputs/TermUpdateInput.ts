import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CourseOnTermUpdateManyWithoutFK_TermInput } from "../inputs/CourseOnTermUpdateManyWithoutFK_TermInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { EnumTermTypeFieldUpdateOperationsInput } from "../inputs/EnumTermTypeFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { UserUpdateOneWithoutFK_TermsInput } from "../inputs/UserUpdateOneWithoutFK_TermsInput";

@TypeGraphQL.InputType("TermUpdateInput", {
  isAbstract: true
})
export class TermUpdateInput {
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

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  TermStartDate?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  TermEndDate?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateOneWithoutFK_TermsInput, {
    nullable: true
  })
  FK_User?: UserUpdateOneWithoutFK_TermsInput | undefined;

  @TypeGraphQL.Field(_type => CourseOnTermUpdateManyWithoutFK_TermInput, {
    nullable: true
  })
  FK_CourseOnTerm?: CourseOnTermUpdateManyWithoutFK_TermInput | undefined;
}
